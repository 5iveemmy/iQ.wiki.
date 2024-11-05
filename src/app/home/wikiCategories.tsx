import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import CategoryCard from "../reusbales/categoryCard";

const tabTriggers = [
  { name: "People in Crypto", value: "people" },
  { name: "Cryptocurrencies", value: "crypto" },
  { name: "Decentralized Finance", value: "finance" },
  { name: "Exchanges", value: "exhanges" },
  { name: "NFTs", value: "nfts" },
  { name: "Decentralized Applications", value: "app" },
  { name: "DAOs", value: "daos" },
  { name: "Organizations", value: "org" },
];

const peopleInCrypto = [
  {
    img: "/pierre.jpg",
    name: "Pierre Person",
    description:
      "Pierre Person is the CEO of Usual, former French Deputy, and...",
    timeEdited: "8 hours",
    author: {
      name: "DevMaxFlip",
      avatar: "/devmaz.jpeg",
    },
  },
  {
    img: "/zironi.jpg",
    name: "Violetta Zironi",
    description:
      "Violetta Zironi is an Italian singer-songwriter and actress ...",
    timeEdited: "2 days",
    author: {
      name: "Tara",
      avatar: "/tara.jpeg",
    },
  },
  {
    img: "/nick.jpg",
    name: "Nick Tomaino",
    description:
      "Nick Tomaino is a cryptocurrency investor and founder of 1co...",
    timeEdited: "4 days",
    author: {
      name: "vzbrv",
      avatar: "/vz.jpeg",
    },
  },
  {
    img: "/alex.jpg",
    name: "Alex Beregszaszi",
    description:
      "Alex Beregszaszi is a researcher, Solidity co-author, and Et...",
    timeEdited: "4 days",
    author: {
      name: "vzbrv",
      avatar: "/vz.jpeg",
    },
  },
];

const WikiCategories = () => {
  return (
    <>
      <div className="relative overflow-x-clip">
        <div className="absolute -z-10 -top-20 lg:-top-60 right-40 w-[400px] lg:h-[1326px] h-[0px] lg:w-[300px] rotate-6 lg:rotate-45 rounded-[0%] bg-home-gradient dark:opacity-50 blur-[100px]"></div>
        <div className="flex flex-col gap-10 container mx-auto py-0 lg:py-20 px-4 lg:px-8 2xl:px-0">
          <div className="flex flex-col gap-3">
            <h1 className="text-base lg:text-2xl font-semibold">
              Wiki Categories
            </h1>
            <h2 className="dark:text-alpha-800 text-gray-600 font-medium max-w-3xl text-sm lg:text-base">
              Explore your endless curiosities in different categories on
              IQ.wiki, ranging from NFTs, to DeFi, Cryptocurrencies and more.
            </h2>
          </div>

          <Tabs defaultValue="people">
            <div className="overflow-x-scroll scrollbar-hide">
              <TabsList className="inline-flex bg-transparent h-10 items-center rounded-md p-1 text-muted-foreground  mb-8 gap-2 xl:mb-12">
                {tabTriggers.map(({ name, value }) => (
                  <TabsTrigger
                    key={value}
                    className="inline-flex items-center justify-center whitespace-nowrap px-4 transition-all text-gray600 dark:text-alpha-800 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:dark::bg-brand-500 data-[state=active]:shadow-sm data-[state=active]:dark:border-brand-800 data-[state=active]:border-brand-500 data-[state=active]:dark:text-brand-800 data-[state=active]:text-brand-500 rounded-full border-b-0 py-2.5 data-[state=active]:bg-brand-50 text-sm font-medium data-[state=active]:dark:bg-brand-200 bg-gray-100 dark:bg-alpha-50 dark:border-gray-700 border-gray-200/20"
                    value={value}
                  >
                    {name}
                  </TabsTrigger>
                ))}
                <Link
                  className="flex items-center gap-2 rounded-full min-w-[110px] xl:w-full px-4 py-2.5 text-sm lg:text-sm font-medium text-gray600 dark:text-gray-300 group h-9 border dark:border-gray-700 border-gray-200/20 bg-gray-100 dark:bg-alpha-50"
                  href="/"
                >
                  <span>View all</span>
                  <IoArrowForwardSharp className="w-3 h-3 transition-transform group-hover:translate-x-1 duration-300 ease-in-out delay-150" />
                </Link>
              </TabsList>
            </div>
            <TabsContent
              value="people"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
            >
              {peopleInCrypto.map((person) => (
                <CategoryCard key={person.name} {...person} />
              ))}
            </TabsContent>
            <TabsContent value="crypto">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default WikiCategories;
