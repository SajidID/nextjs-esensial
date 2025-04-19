import { getSetting } from "./queries/getSetting";

export async function Footer() {
  const setting = await getSetting();

  return <footer>Copyright &copy; {setting.siteName}</footer>;
}
