import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function Title1({ text }: { text: string }) {
  return (
    <p className=" capitalize w-full max-w-6xl mt-5 text-pretty max-md:text-sm text-2xl font-extrabold indent-0">
      {text}
    </p>
  );
}

export function Title2({ text }: { text: string }) {
  return (
    <p className=" capitalize w-full max-w-6xl mt-5 text-pretty max-md:text-sm text-xl font-bold indent-0">
      {text}
    </p>
  );
}

export function Title3({ text }: { text: string }) {
  return (
    <p className=" capitalize w-full max-w-6xl mt-5 text-pretty max-md:text-xs text-lg font-bold indent-0">
      {text}
    </p>
  );
}

export function Paragraph({ text }: { text: string }) {
  return (
    <p className="w-full max-w-6xl mt-5 text-pretty max-md:text-xs indent-0">{text}</p>
  );
}

export function List({ texts }: { texts: string[] }) {
  return (
    <div className="w-full max-w-6xl mt-5 text-pretty max-md:text-xs">
      <ul className="pl-10 max-md:pl-2">
        {texts.map((text, i) => (
          <li key={i}>
            {i + 1}
            {")"}&nbsp; {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Quote({ text }: { text: string }) {
  return (
    <p className="w-full max-w-6xl mt-5 text-pretty max-md:text-xs pl-3 border-l-8 italic font-bold border-inherit bg-white/5 p-2 indent-0">
      {text}
    </p>
  );
}

export function Code({ text, language }: { text: string; language: string }) {
  return (
    <div className="w-full max-w-6xl mt-5 text-balance max-md:text-xs">
      <SyntaxHighlighter language={language} style={atelierLakesideDark}>
        {text}
      </SyntaxHighlighter>
    </div>
  );
}

export function Image({ url }: { url: string }) {
  return (
    <p className="w-fit mx-auto max-w-6xl mt-5 max-md:text-xs">
      <img
        src={url}
        alt={url}
        className="w-4/5 h-auto mx-auto aspect-video object-contain"
      />
    </p>
  );
}

export function Video({ url }: { url: string }) {
  return (
    <p className="w-full mx-auto text-center max-w-6xl mt-5 max-md:text-xs">
      <iframe
        src={url}
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; full-screen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
        className="w-4/5 mx-auto h-auto aspect-video object-contain"
      ></iframe>
    </p>
  );
}
