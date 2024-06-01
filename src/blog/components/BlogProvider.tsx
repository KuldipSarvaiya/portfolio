import {
  ReactElement,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as Realm from "realm-web";

type BlogType = {
  _id: string;
  title: string;
  hashtag: string[];
  head: string[];
  body: [string | string[]];
  publish_date: string;
};

export const Context: React.Context<{ data: BlogType[] }> = createContext<{
  data: BlogType[];
}>({ data: [] });

function BlogProvider({ children }: { children: ReactElement }) {
  const [data, setData] = useState<BlogType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const app = useMemo(() => {
    return new Realm.App({ id: import.meta.env.VITE_APP_REALM_APP_ID });
  }, []);

  const authenticate = useCallback(async () => {
    const credentials = Realm.Credentials.apiKey(
      import.meta.env.VITE_APP_REALM_API_KEY
    );
    try {
      const user: Realm.User = await app.logIn(credentials);

      return user;
    } catch (err) {
      console.error("Failed to log in", err);
      throw err;
    }
  }, []);

  const fetchData = useCallback(async (user: Realm.User) => {
    setIsLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_APP_REALM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // console.log(data);

      setData(data);
      setError(null);
    } catch (err) {
      // console.error("Error fetching data:", err);
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const initialize = async () => {
      try {
        const user = await authenticate();
        await fetchData(user);
      } catch (err) {
        setError("Failed to authenticate and fetch data");
      }
    };

    initialize();

    return () => {
      (async () => {
        await app.currentUser?.logOut();
      })();
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <span className="w-10 h-10 border-2 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-full border-t-0 border-l-0 spin"></span>
      ) : error ? (
        <center className="p-10 m-10 text-xl">
          Ahh... Wait✋, Feels like im Overwhelmed 🥵
        </center>
      ) : (
        // <center className="p-10 m-10 text-xl">Loading...</center>
        <Context.Provider value={{ data }}>{children}</Context.Provider>
      )}
    </>
  );
}

export default BlogProvider;
