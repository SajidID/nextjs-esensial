import { Setting } from "../types/Setting";

export async function getSetting(): Promise<Setting> {

  const res = await fetch("http://localhost:3001/setting");
  const setting = await res.json();

  return setting;
}
