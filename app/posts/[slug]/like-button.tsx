"use client";

import { createLike } from "@/app/actions";
import { useTransition } from "react";

export function LikeButton() {
  const [pending, startTransition] = useTransition();

  async function handleLike() {
    startTransition(async () => {
      await createLike();
    });
  }

  return (
    <button
      className="bg-purple-500 px-4 py-2 rounded mt-7"
      onClick={handleLike}
    >
      {pending ? "Sedang mengelaik..." : "Like"}
    </button>
  );
}
