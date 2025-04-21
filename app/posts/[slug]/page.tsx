import { Post } from "@/app/types/Post";
import { CommentForm } from "./comment-form";

async function getPost(slug: string): Promise<Post> {
  const res = await fetch("http://localhost:3001/posts?slug=" + slug);
  const [post] = await res.json();

  return post;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  return (
    <>
      <article>
        <h1 className="text-lg">{post.title}</h1>
        <p>{post.content}</p>
      </article>
      <section className="mt-4">
        <h2 className="text-lg mb-4">Comments</h2>
        <CommentForm />
      </section>
    </>
  );
}
