"use server";

export async function createComment(prevData: any, formData: FormData) {
  const comment = formData.get("comment") as string;

  if (!comment) {
    return { error: "Comment is required" };
  }
}

export async function createLike(){
  console.log("Masokkk")
}
