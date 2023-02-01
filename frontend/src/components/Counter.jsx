import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // const url = process.env.VITE_BACKEND_URL;

  return (
    <p>
      {/* url */}
      <button
        type="button"
        onClick={() => setCount((oldCount) => oldCount + 1)}
      >
        count is: {count}
      </button>
    </p>
  );
}
