"use client";

import React from "react";
import { create } from "zustand";

type Store = {
  count: number;
  increment: () => void;
};

const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default function Home() {
  const { count, increment } = useStore();

  return (
    <>
      <div> Home Page</div>
      <div>Count: {count}</div>
      <button
        className="border-2 px-4 py-2 hover:cursor-pointer"
        onClick={increment}
      >
        Increment
      </button>
    </>
  );
}
