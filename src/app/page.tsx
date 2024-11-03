"use client";

import dynamic from "next/dynamic";
import WikiInfos from "./home/wikiInfos";

const Navbar = dynamic(() => import("./reusbales/navbar"), { ssr: false });
const Header = dynamic(() => import("./home/header"), { ssr: false });

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-Montserrat)]">
      <Navbar />
      <Header />
      <WikiInfos />
    </main>
  );
}
