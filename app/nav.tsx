import Link from "next/link";

export function Nav(){
  return (
    <nav className="space-x-7 mt-4 mb-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Post</Link>
    </nav>
  );
}
