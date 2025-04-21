"use client";

import { createComment } from "@/app/actions";
import { useActionState } from "react";

const initialState = {
  error: "",
};

export function CommentForm() {
  const [state, formAction, pending] = useActionState(
    createComment,
    initialState
  );

  return (
    <form className="flex flex-col w-72" action={formAction}>
      {state?.error && (
        <div className="text-red-500" role="alert">
          {state.error}
        </div>
      )}
      <textarea
        placeholder="Write your command here..."
        className="w-full h-40 border border-white mb-2 rounded"
        name="comment"
        required
      />
      <button className="bg-blue-800 text-white px-4 py-2 rounded w-full">
        Send
      </button>
    </form>
  );
}
