import React from "react";
import { RiBarChartFill } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import WikiBox from "../reusbales/wikiBox";
import WikiCard from "../reusbales/wikiCard";
import { RiDatabaseFill } from "react-icons/ri";
import { TiArrowRight } from "react-icons/ti";

const trendFilter = ["Today", "Last Week", "Last Month"];

const trendingWikis: Wikis[] = [
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

const wikiCategories: Wikis[] = [
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

const WikiInfos = () => {
  const [filtestate, setTrendFilter] = React.useState<string>("Today");

  return (
    <div className="relative">
      <section className="px-4 lg:px-8 2xl:px-0 container mx-auto pb-16 md:pb-20 lg:pb-24 -mt-36 md:-mt-0">
        <div className="md:grid flex flex-row flex-wrap md:items-center md:grid-cols-2 xl:grid-cols-3 w-full gap-4 lg:gap-8">
          <WikiCard
            title="Tending Wikis"
            icon={<RiBarChartFill className="w-6 h-6 text-brand-800" />}
            headerNode={
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="dark:hover:bg-[#ffffff14] dark:hover:text-white items-center w-36 justify-between bg-transparent text-text-color border dark:border-white/15 border-gray-200 text-xs"
                  >
                    {filtestate}
                    <MdOutlineKeyboardArrowDown className="opacity-50 w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="font-[family-name:var(--font-Montserrat)]">
                  <DropdownMenuGroup>
                    {trendFilter.map((item) => (
                      <DropdownMenuItem
                        key={item}
                        onClick={() => setTrendFilter(item)}
                        className="pl-7 text-xs py-1.5 dark:hover:bg-[#ffffff14] dark:hover:text-white text-text-color cursor-pointer"
                      >
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            }
            contentNode={trendingWikis.map((item) => (
              <WikiBox
                key={item.title}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))}
          />
          <WikiCard
            title="Wiki Categories"
            icon={<RiDatabaseFill className="w-6 h-6 text-brand-800" />}
            headerNode={
              <Button
                variant="outline"
                className="dark:hover:bg-[#ffffff14] dark:hover:text-white items-center  justify-between bg-transparent text-text-color border dark:border-white/15 border-gray-200 text-xs"
              >
                View all
                <TiArrowRight className=" w-3 h-3" />
              </Button>
            }
            contentNode={wikiCategories.map((item) => (
              <WikiBox
                key={item.title}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))}
          />
        </div>
      </section>
    </div>
  );
};

export default WikiInfos;
