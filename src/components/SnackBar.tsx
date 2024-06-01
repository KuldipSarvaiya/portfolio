import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function SnackBar() {
  const [display, setDisplay] = useState<number>(20000);
  const timer = useRef<undefined | number>(undefined);

  const startInterval = useCallback(() => {
    timer.current = setInterval(() => {
      setDisplay((prev) => prev - 100);
    }, 100);
  }, []);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  if (display === 0) {
    clearInterval(timer.current);
    return null;
  }

  return (
    <div className="fixed bottom-10 max-sm:bottom-1 left-1/2  -translate-x-1/2 blur-bg rounded-lg border-2 border-blue-900 animate-slide-in text-nowrap">
      <p className="p-2">
        <Link to={"/blog"} className="text-green-500">
          Explore : Read My Blogs Here↗ &nbsp;{" "}
        </Link>
        <span
          className="cursor-pointer hover:shadow-xl shadow-red-500"
          onClick={() => {
            setDisplay(0);
          }}
        >
          ❌
        </span>
      </p>
      <p
        className="h-1 bg-blue-900 bg-gra ient-to-r from-red-600 to-blue-900"
        style={{ width: `${display / 200}%` }}
      ></p>
    </div>
  );
}

export default SnackBar;
