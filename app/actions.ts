"use client";

export async function createComment(formData: FormData) {
  console.log(formData.get("comment"));
}
