import { Post } from "@/app/types/Post";

async function getPost(slug: string): Promise<Post> {
    const res = await fetch("http://localhost:3001/posts?slug="+slug)
    const [post] = await res.json();

    return post
}

export default async function PostPage({
    params,
}: {
    params: Promise<{slug: string}>;
}) {
    const {slug} = await params;

    const post = await getPost(slug);

    return(
        <article>
            <h1>{post.title}</h1>
            <h1>{post.content}</h1>
        </article>
    )
}