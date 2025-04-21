import { createComment } from "@/app/actions";
import { Post } from "@/app/types/Post";

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
        <form className="flex flex-col w-72" action={createComment}>
          <textarea
            placeholder="Write your command here..."
            className="w-full h-40 border border-white mb-2 rounded"
            name="comment"
          />
          <button className="bg-blue-800 text-white px-4 py-2 rounded w-full">
            Send
          </button>
        </form>
      </section>
    </>
  );
}
