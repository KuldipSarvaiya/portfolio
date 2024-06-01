import React from "react";

const Share: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleClick = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy URL:", error);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center rounded-full text-blue-500 blur-bg px-3 py-2 text-sm font-medium text-center hover:text-orange-500 hover:ring-orange-500 focus:outline-none ring-blue-500 ring-1"
        onClick={handleClick}
      >
        <span className="ml-2">
          {copied ? "Link Copied!" : "Share Blog 🔗"}
        </span>
      </button>
    </div>
  );
};

export default Share;
