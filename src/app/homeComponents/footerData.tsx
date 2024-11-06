import {
  RiCalendarEventFill,
  RiDatabaseFill,
  RiDiscordFill,
  RiFacebookFill,
  RiGithubFill,
  RiHashtag,
  RiHome5Fill,
  RiInstagramFill,
  RiRedditFill,
  RiSortAsc,
  RiTelegramFill,
  RiTwitterFill,
} from "react-icons/ri";

export const socialIcons = [
  {
    icon: <RiTwitterFill className="h-7 w-6" />,
    link: "https://twitter.com/IQWIKI",
  },
  {
    icon: <RiRedditFill className="h-7 w-6" />,
    link: "https://www.reddit.com/r/Everipedia/",
  },
  {
    icon: <RiTelegramFill className="h-7 w-6" />,
    link: "https://t.me/everipedia",
  },
  {
    icon: <RiInstagramFill className="h-7 w-6" />,
    link: "https://www.instagram.com/iqwiki_/",
  },
  {
    icon: <RiGithubFill className="h-7 w-6" />,
    link: "https://github.com/EveripediaNetwork",
  },
  {
    icon: <RiDiscordFill className="h-7 w-6" />,
    link: "https://discord.gg/x9EWvTcPXt",
  },
  {
    icon: <RiFacebookFill className="h-7 w-6" />,
    link: "https://www.facebook.com/iqdotwiki",
  },
];

export const listData = [
  {
    title: "IQ",
    items: [
      { text: "What's IQ", link: "https://iq.wiki/wiki/iq/" },
      { text: "Bridges", link: "https://learn.everipedia.org/iq/iq/bridges" },
      { text: "Staking", link: "https://iq.braindao.org/dashboard/stake" },
      { text: "Bonds", link: "https://app.bondprotocol.finance/#/market/1/80" },
    ],
  },
  {
    title: "Company",
    items: [
      { text: "About us", link: "/about/" },
      {
        text: "Careers",
        subtext: "We are hiring",
        link: "https://join.com/companies/iq",
      },
      { text: "Branding", link: "/branding/" },
      { text: "IQ GPT", link: "https://iqgpt.com" },
      { text: "IQ Dashboard", link: "https://iq.braindao.org" },
    ],
  },
  {
    title: "Resources",
    items: [
      { text: "Help", link: "https://learn.everipedia.org/iq/" },
      { text: "Blog", link: "/blog/" },
      { text: "FAQ", link: "/faq/" },
      { text: "Glossary", link: "/glossary" },
    ],
  },
  {
    title: "Policies",
    items: [
      { text: "Guidelines", link: "/guidelines/" },
      { text: "Privacy Policy", link: "/privacy/" },
      { text: "Terms of Service", link: "/terms/" },
      { text: "Your CA Privacy Rights", link: "/CaPrivacyRights/" },
    ],
  },
];

export const hiddenNav = [
  {
    icon: <RiHome5Fill className="h-5 w-5" />,
    text: "Home",
    link: "/",
  },
  {
    icon: <RiDatabaseFill className="h-5 w-5" />,
    text: "Categories",
    link: "/categories",
  },
  {
    icon: <RiHashtag className="h-5 w-5" />,
    text: "Rank",
    link: "/rank",
  },
  {
    icon: <RiCalendarEventFill className="h-5 w-5" />,
    text: "Events",
    link: "/events",
  },
  {
    icon: <RiSortAsc className="h-5 w-5" />,
    text: "Glossary",
    link: "/glossary",
  },
];

export const discoveries = [
  "Protocols",
  "Blockchains",
  "Founders",
  "Ethereum",
  "AI",
  "Online",
  "Organizations",
  "PeopleinDefi",
  "Glossary",
  "BinanaceSmartChain",
  "Entertainment",
  "Solana",
  "Memecoins",
  "Events",
  "DEXes",
];
