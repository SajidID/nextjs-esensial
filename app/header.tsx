import Link from "next/link";

type Setting = {
  siteName: string;
};

async function getSetting(): Promise<Setting> {
  const res = await fetch("http://localhost:3001/settings");
  const setting = await res.json();

  return setting;
}

export default async function Header() {
  const setting = await getSetting();

  return (
    <header className="border-b border-white">
      <div>{setting.siteName}</div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">Home</Link>
        <Link href="/about/team">Home</Link>
      </nav>
    </header>
  );
}
