"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./reusbales/navbar"), { ssr: false });

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-Montserrat)]">
      <Navbar />
    </main>
  );
}
