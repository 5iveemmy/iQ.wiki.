import {
  RiBitCoinFill,
  RiBook2Fill,
  RiCodeBoxFill,
  RiCoinFill,
  RiCopperDiamondLine,
  RiGroup2Fill,
  RiImage2Fill,
  RiNewspaperFill,
  RiNumbersFill,
  RiOrganizationChart,
  RiRecycleFill,
  RiSearchEyeFill,
  RiStarSFill,
  RiTeamFill,
  RiUser3Fill,
  RiAccountCircleFill,
  RiAddBoxFill,
  RiBarChartFill,
  RiCompass3Line,
  RiInformationFill,
  RiSettings5Fill,
  RiWalletFill,
  RiHashtag,
} from "react-icons/ri";

export const links: MenuLinks[] = [
  { href: "/", title: "Rank" },
  { href: "/", title: "Activity" },
  { href: "/", title: "About" },
  { href: "/", title: "Events" },
];

export const languages: Languages[] = [
  { language: "English", abbr: "EN", flag: "/us.svg" },
  { language: "Korean", abbr: "KR", flag: "/kr.svg" },
  { language: "Chinese", abbr: "ZH", flag: "/zh.svg" },
];

export const categories: MenuItems[] = [
  { title: "People In Crypto", icon: <RiUser3Fill size="25" />, href: "/" },
  { title: "Cryptocurrencies", icon: <RiBitCoinFill size="20" />, href: "/" },
  {
    title: "Decentralized Finance",
    icon: <RiRecycleFill size="20" />,
    href: "/",
  },
  { title: "Exchanges", icon: <RiCoinFill size="20" />, href: "/" },
  { title: "NFTs", icon: <RiImage2Fill size="20" />, href: "/" },
  { title: "Dapps", icon: <RiCopperDiamondLine size="20" />, href: "/" },
  { title: "DAOs", icon: <RiTeamFill size="20" />, href: "/" },
  {
    title: "Organizations",
    icon: <RiOrganizationChart size="20" />,
    href: "/",
  },
];

export const menuItems: MenuItems[] = [
  { title: "IQ Learn", icon: <RiBook2Fill size="25" />, href: "/" },
  { title: "IQ Dashboard", icon: <RiNumbersFill size="20" />, href: "/" },
  { title: "Glossary", icon: <RiStarSFill size="20" />, href: "/" },
  { title: "IQ GPT", icon: <RiSearchEyeFill size="20" />, href: "/" },
  { title: "IQ Code", icon: <RiCodeBoxFill size="20" />, href: "/" },
  { title: "Blog", icon: <RiNewspaperFill size="20" />, href: "/" },
  { title: "BrainDAO", icon: <RiGroup2Fill size="20" />, href: "/" },
];

export const wikis: Wikis[] = [
  {
    title: "Truth Terminal",
    desc: "Truth Terminal is an AI chatbot that became a crypto millonaire...",
    img: "/bird.jpg",
  },
  {
    title: "Luke Belmar",
    desc: "Luke Belmar is a digital entrepreneur, crypto investor, and found...",
    img: "/luke.jpg",
  },
  {
    title: "Peter Todd",
    desc: "Peter Todd is a Bitcoin core developer and cryptographer, recentl...",
    img: "/peter.jpg",
  },
  {
    title: "Andy Ayrey",
    desc: "Andy Ayrey is an AI researcher and developer, known for creating ...",
    img: "/andy.jpg",
  },
  {
    title: "IQ token",
    desc: "Andy Ayrey is an AI researcher and developer, known for creating ...",
    img: "/iq-token.jpg",
  },
];

export const mobileNavLinks = [
  {
    title: "Categories",
    icon: <RiCompass3Line className="w-6 h-6" />,
  },
  {
    title: "Rank",
    icon: <RiHashtag className="w-6 h-6" />,
  },
  {
    title: "Activity",
    icon: <RiBarChartFill className="w-6 h-6" />,
  },
  {
    title: "About",
    icon: <RiInformationFill className="w-6 h-6" />,
  },
  {
    title: "Create Wiki",
    icon: <RiAddBoxFill className="w-6 h-6" />,
  },
  {
    title: "Wallet",
    icon: <RiWalletFill className="w-6 h-6" />,
  },

  {
    title: "Profile",
    icon: <RiAccountCircleFill className="w-6 h-6" />,
  },
  {
    title: "Setings",
    icon: <RiSettings5Fill className="w-6 h-6" />,
  },
];
