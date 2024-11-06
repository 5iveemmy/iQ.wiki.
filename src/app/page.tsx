"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Navbar = dynamic(() => import("./reusbales/navbar"), { ssr: false });
const Header = dynamic(() => import("./homeComponents/header"), { ssr: false });
const WikiInfos = dynamic(() => import("./homeComponents/wikiInfos"), {
  ssr: false,
});
const Footer = dynamic(() => import("./homeComponents/footer"), { ssr: false });

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
