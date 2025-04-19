import { Nav } from "./nav";
import { getSetting } from "./queries/getSetting";

export default async function Header() {
  const setting = getSetting();

  return (
    <header className="border-b border-white">
      <div className="text-2xl">{(await setting).siteName}
      <Nav />
      </div>
    </header>
  );
}
