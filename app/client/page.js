"use client";

import { useState } from "react";

function ClientPage(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button
        className="btn btn-primary uppercase"
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

export default ClientPage;
