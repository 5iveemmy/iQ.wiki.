"use client";

import dynamic from "next/dynamic";
import WikiInfos from "./home/wikiInfos";
import Footer from "./home/footer";
import { useState } from "react";

const Navbar = dynamic(() => import("./reusbales/navbar"), { ssr: false });
const Header = dynamic(() => import("./home/header"), { ssr: false });

export default function Home() {
  const [navbar, SetNavbar] = useState<boolean>(false);

  return (
    <main className="font-[family-name:var(--font-Montserrat)]">
      <Navbar navbar={navbar} />
      <Header />
      <WikiInfos />
      <Footer navbar={navbar} SetNavbar={SetNavbar} />
    </main>
  );
}
