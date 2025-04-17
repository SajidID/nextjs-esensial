type Post = {
  id: string;
  title: string;
  content: string;
};

async function getPosts(): Promise<Post[]> {
const res = await fetch("http://localhost:3001/posts");
const posts = await res.json();

return posts

}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}
