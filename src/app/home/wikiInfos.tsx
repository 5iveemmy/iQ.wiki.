import React from "react";
import {
  RiBarChartFill,
  RiCoinFill,
  RiCoinsFill,
  RiRobotFill,
  RiUserFill,
} from "react-icons/ri";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiImage } from "react-icons/bi";
import { IoArrowForwardSharp } from "react-icons/io5";
import Image from "next/image";
import { useTheme } from "next-themes";

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

const tabTriggers = [
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

const WikiInfos = () => {
  const [filtestate, setTrendFilter] = React.useState<string>("Today");
  const { theme } = useTheme();

  const isDark = theme === "dark";

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
      <div className="relative overflow-x-clip">
        <div className="absolute -z-10 -top-20 lg:-top-60 right-40 w-[400px] lg:h-[1326px] h-[0px] lg:w-[300px] rotate-6 lg:rotate-45 rounded-[100%] bg-home-gradient dark:opacity-50 blur-[100px]"></div>
        <div className="w-full container px-4 lg:px-8 2xl:px-0 mx-auto mb-20">
          <div>
            <h1 className="text-sm lg:text-2xl font-bold">
              Wiki rank by MarketCap
            </h1>
            <p className="pt-2 dark:text-alpha-800 text-gray-600 max-w-4xl font-medium text-xs lg:text-base">
              A list of wikis in different categories, including Defi, NFTs,
              DAOs and Cryptocurrencies, ranked based on the global marketcap
              respectively.
            </p>
          </div>
          <div className="pt-8">
            <Tabs defaultValue="cryto">
              <div className="overflow-x-scroll scrollbar-hide">
                <TabsList className="bg-transparent h-10 items-center justify-center rounded-md p-1 text-muted-foreground mb-4 space-x-6">
                  {tabTriggers.map((item) => (
                    <TabsTrigger
                      className="justify-center whitespace-nowrap rounded-sm px-4 text-sm font-medium transition-all text-gray600 dark:text-alpha-800 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-brand-50 data-[state=active]:dark::bg-brand-500 data-[state=active]:dark:bg-brand-200 data-[state=active]:shadow-sm border-b-4 border-transparent data-[state=active]:dark:border-brand-800 data-[state=active]:border-brand-500 py-2 data-[state=active]:dark:text-brand-800 data-[state=active]:text-brand-500 flex flex-row items-center gap-2"
                      value={item.value}
                      key={item.title}
                    >
                      {item.icon} {item.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <TabsContent value="crypto">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 2xl:px-0 relative pb-20 pt-0 lg:py-20">
        <div className="flex flex-col gap-2 lg:gap-6 dark:bg-alpha-50 bg-slate-100 justify-center items-center pt-6 rounded-xl md:mb-72 lg:mb-96 px-0 lg:px-8 xl:px-0">
          <div className="flex flex-row gap-2 bg-brand-50 dark:bg-brand-100 rounded-2xl text-brand-500 dark:text-brand-800 p-1">
            <div className="bg-white py-0.5 px-3 rounded-full">
              <p>New</p>
            </div>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1 group"
              href="https://iqgpt.com/"
            >
              <p className="text-sm md:text-base">We built IQ GPT </p>
              <IoArrowForwardSharp />
            </a>
          </div>
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white text-center">
              IQ GPT - The AI Agent for Blockchain Knowledge
            </h2>
            <p className="text-sm md:text-base text-center text-gray-600 dark:text-alpha-600 max-w-5xl mt-2 px-2 lg:px-0">
              IQ GPT is a crypto-focused AI model that provides insights into
              intricate terms, live market trends, and breaking news. It is
              powered by the IQ token, which enables holders to participate in
              governance and get access to additional features.
            </p>
            <div className="flex flex-row gap-5 my-4">
              <a
                target="_blank"
                className="font-medium dark:bg-brand-800 bg-brand-500 text-white py-3 px-3 rounded-lg text-sm"
                href="https://iqgpt.com/"
              >
                Explore IQ GPT
              </a>
              <a
                target="_blank"
                className="font-medium cursor-pointer bg-white text-black py-3 px-4 rounded-lg text-sm"
              >
                About IQ Token
              </a>
            </div>
            <div className="hidden lg:block -mb-86">
              <Image
                width={1020}
                height={768}
                loading="lazy"
                src={isDark ? "/mockup-xl-dark.png" : "/mockup-xl.png"}
                alt="iqgpt-mockup"
              />
            </div>
            <div className="hidden md:block lg:hidden -mb-80">
              <Image
                width={620}
                height={600}
                loading="lazy"
                src={isDark ? "/mockup-md-dark.png" : "/mockup-md.png"}
                alt="iqgpt-mockup"
              />
            </div>
            <div className="block md:hidden">
              <Image
                width={500}
                height={360}
                loading="lazy"
                src={isDark ? "/mockup-sm-dark.png" : "/mockup-sm.png"}
                alt="iqgpt-mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikiInfos;