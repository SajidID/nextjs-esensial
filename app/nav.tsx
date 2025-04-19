import Link from "next/link";

export function Nav(){
  return (
    <nav className="space-x-7">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/about/team">Team</Link>
    </nav>
  );
}
