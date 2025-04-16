"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Counter:{count}</p>
      <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-white rounded-lg">Tambah</button>
      <br></br>
      <button onClick={() => setCount(0)} className="px-8 py-4 bg-pink-500 text-green-50 rounded-lg">Riset</button>
    </>
  );
}
