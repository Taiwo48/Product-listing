"use client";

import { useState } from "react";

export default function Search({ onSearch }: any) {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={handleChange}
      className="w-full border p-3 rounded-lg shadow-sm"
    />
  );
}