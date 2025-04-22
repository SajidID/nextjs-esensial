import { getSetting } from "./queries/getSetting";
import { Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./footer";
import { Nav } from "./nav";

const fontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const setting = await getSetting();

  return {
    title: {
      template: `%s | ${setting.siteName}`,
      default: "Untitled",
    },
    description: "My Blog",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <header className="border-b border-white text-4xl">
          Sajid Blog
          <Nav />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
