import React from "react";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="border-b border-amber-700">Dashboard Layout</header>
      {children}
    </main>
  );
}
