import { BiImage } from "react-icons/bi";
import {
  RiArrowDownSFill,
  RiCoinFill,
  RiCoinsFill,
  RiRobotFill,
  RiUserFill,
} from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

interface AddOnProps {
  icon: string;
  title: string;
  acronym: string;
  cap: string;
  percent: string;
}

type Cryptos = {
  number: number;
  name: { icon: string; title: string; acronym: string };
  price: string;
  marketCap: { cap: string; percent: string };
  founderIndex: string | string[];
  blockchain: string | string[];
  founded: string;
};

export const tableData: Cryptos[] = [
  {
    number: 1,
    name: { title: "Bitcoin", icon: "/bitcoin.png", acronym: "BTC" },
    price: "$70,136.00",
    marketCap: { cap: "1.4T", percent: "2.82%" },
    founderIndex: "Satoshi Nakamoto",
    blockchain: "Bitcoin",
    founded: "Jan 2009",
  },
  {
    number: 2,
    name: { title: "Ethereum", icon: "/ethereum.png", acronym: "ETH" },
    price: "$2,479.12",
    marketCap: { cap: "298B", percent: "1.29%" },
    founderIndex: ["Vitalik Buterin", "Gavin Wood", "Charles Hoskinson.."],
    blockchain: "Ethereum",
    founded: "Jul 2014",
  },
  {
    number: 3,
    name: { title: "Tether(USDT)", icon: "/tether.png", acronym: "USDT" },
    price: "$1.003",
    marketCap: { cap: "121B", percent: "0.41%" },
    founderIndex: ["Reeve Collins", "Brock Pierce", "Craig Sellars.."],
    blockchain: ["Polygon", "Ethereum", "Bitcoin..."],
    founded: "Jul 2014",
  },
  {
    number: 4,
    name: { title: "BNB)", icon: "/bnb-table.png", acronym: "BNB" },
    price: "$569.92",
    marketCap: { cap: "83B", percent: "2.44%" },
    founderIndex: ["Changpeng Zhao (CZ)", "Yi He"],
    blockchain: "BNB Chain",
    founded: "Jul 2017",
  },
  {
    number: 5,
    name: { title: "Solana(SOL)", icon: "/solana.png", acronym: "SOL" },
    price: "$167.35",
    marketCap: { cap: "79B", percent: "3.10%" },
    founderIndex: "Anatoly Yakovenko",
    blockchain: "Solana",
    founded: "Feb 2020",
  },
];

export const columns: ColumnDef<Cryptos, AddOnProps>[] = [
  {
    accessorKey: "number",
    header: "#",
    cell: ({ row }) => <div>{row.getValue("number")}</div>,
  },
  {
    accessorKey: "name",
    header: () => <p className="min-w-32">Name</p>,
    cell: (info: CellContext<Cryptos, AddOnProps>) => {
      return (
        <div className="flex items-center gap-2">
          <Image width={40} height={40} src={info.getValue().icon} alt="icon" />
          <div>
            <p className="text-sm text-brand-800">{info.getValue().title}</p>
            <p className="text-gray-400 font-medium">
              {info.getValue().acronym}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <p>Price</p>,
    cell: ({ row }) => {
      return (
        <div className="text-text-gray-900 font-medium">
          {row.getValue("price")}
        </div>
      );
    },
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0 items-center gap-2 hover:bg-bg-color hover:text-muted-foreground"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Market Cap <RiArrowDownSFill />
        </Button>
      );
    },
    cell: (info: CellContext<Cryptos, AddOnProps>) => {
      return (
        <div className="flex gap-1 ">
          <p className="font-medium text-text-gray-900">
            {info.getValue().cap}
          </p>
          <span className="text-green-500 self-start leading-4 text-[10px]">
            {info.getValue().percent}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "founderIndex",
    header: () => <p className="min-w-52">Crypto Founder Index</p>,
    cell: ({ row }) => {
      const founders: string[] | string = row.getValue("founderIndex");
      return (
        <div className="text-brand-800 font-medium text-wrap">
          {Array.isArray(founders) ? (
            founders.map((founder, index) => (
              <span key={index}>
                {founder}
                {index < founders.length - 1 && (
                  <span className="text-white"> , </span>
                )}
              </span>
            ))
          ) : (
            <span>{founders}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "blockchain",
    header: () => <p className="min-w-52">Blockchain</p>,
    cell: ({ row }) => {
      const blockchains: string[] | string = row.getValue("founderIndex");
      return (
        <div className="text-brand-800 font-medium text-wrap">
          {Array.isArray(blockchains) ? (
            blockchains.map((blockchain, index) => (
              <span key={index}>
                {blockchain}
                {index < blockchains.length - 1 && (
                  <span className="text-white"> , </span>
                )}
              </span>
            ))
          ) : (
            <span>{blockchains}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "founded",
    header: () => <p>Date Founded</p>,
    cell: ({ row }) => {
      return (
        <div>
          <p className="text-brand-800 font-medium">
            {row.getValue("founded")}
          </p>
        </div>
      );
    },
  },
];

export const trendFilter = ["Today", "Last Week", "Last Month"];

export const trendingWikis: Wikis[] = [
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

export const wikiCategories: Wikis[] = [
  {
    title: "Cryptocurrencies",
    desc: "This cryptocurrency category covers all cryptocurrencies from Bitcoiin to IQ",
    img: "/cryptocurrencies-card.png",
  },
  {
    title: "DAOs",
    desc: "The DAOs category covers decentralized autonomous organizations of all kinds from Defi DAOs like...",
    img: "/daos-card.png",
  },
  {
    title: "Decentralized Applications",
    desc: "The Decentralized Applications (dapps) category covers everything from time-weighted average...",
    img: "/dapps-card.jpg",
  },
  {
    title: "Decentralized Finance",
    desc: "The Decentralized Finance (DeFi) category covers everything from stablecoin projects like Frax Finance...",
    img: "/defi-card.png",
  },
  {
    title: "Organizations",
    desc: "The Organization category covers companies and other organizations that develop, implement, or untili...",
    img: "/organizations-card.png",
  },
];

export const tabTriggers = [
  {
    icon: (
      <RiCoinsFill className="text-brand-500 dark:text-brand-800 w-6 h-6" />
    ),
    title: "Cryptocurrencies",
    value: "crypto",
  },
  {
    icon: <RiCoinFill className="text-brand-500 dark:text-brand-800 w-6 h-6" />,
    title: "Stablecoins",
    value: "stable",
  },
  {
    icon: (
      <RiRobotFill className="text-brand-500 dark:text-brand-800 w-6 h-6" />
    ),
    title: "AI Tokens",
    value: "tokens",
  },
  {
    icon: <RiUserFill className="text-brand-500 dark:text-brand-800 w-6 h-6" />,
    title: "Founders",
    value: "founders",
  },
  {
    icon: <BiImage className="text-brand-500 dark:text-brand-800 w-6 h-6" />,
    title: "NFTs",
    value: "nfts",
  },
];

export const featuredWikis = [
  {
    img: "/sky.jpeg",
    name: "Sky.Money",
    description:
      "Sky.money is a non-custodial gateway to the decentralized Sky Pro...",
    timeEdited: "8 hours",
    author: {
      name: "zainab",
      avatar: "/devmaz.jpeg",
    },
  },
  {
    img: "/alchemy.jpeg",
    name: "Piere Person",
    description:
      "Pierre Person is the CEO of Usual, former French Deputy, and...",
    timeEdited: "8 hours",
    author: {
      name: "vzbrv",
      avatar: "/vz.jpeg",
    },
  },
  {
    img: "/ethena.jpeg",
    name: "Ethena Usde",
    description:
      "Ethena USDe is a 1:1 collateralized on-chain stablecoin, powered ...",
    timeEdited: "8 hours",
    author: {
      name: "vzbrv",
      avatar: "/vz.jpeg",
    },
  },
  {
    img: "/peter.jpg",
    name: "Peter Todd",
    description:
      "Peter Todd is a Bitcoin core developer and cryptographer, recentl...",
    timeEdited: "8 hours",
    author: {
      name: "zainab",
      avatar: "/devmaz.jpeg",
    },
  },
  {
    img: "/brain.jpeg",
    name: "zkLLM",
    description:
      "zkLLM combines zero-knowledge proofs with large language models t...",
    timeEdited: "8 hours",
    author: {
      name: "vzbrv",
      avatar: "/vz.jpeg",
    },
  },
];
