import { useState } from "react";

export default function JobDescription({ description, limit = 1000 }) {
  const [showFull, setShowFull] = useState(false);

  const toggleShow = () => setShowFull((prev) => !prev);

  const textToShow = showFull
    ? description
    : description.slice(0, limit) + (description.length > limit ? "..." : "");

  return (
    <div>
      <p>{textToShow}</p>
      {description.length > limit && (
        <button
          onClick={toggleShow}
          className="text-blue-600 hover:underline mt-2"
        >
          {showFull ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
