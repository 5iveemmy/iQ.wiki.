"use client";
import Image from "next/image";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
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
} from "react-icons/ri";
import Link from "next/link";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavSearchField from "./navSearchField";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const links: MenuLinks[] = [
  { href: "/", title: "Rank" },
  { href: "/", title: "Activity" },
  { href: "/", title: "About" },
  { href: "/", title: "Events" },
];

const languages: Languages[] = [
  { language: "English", abbr: "EN", flag: "/us.svg" },
  { language: "Korean", abbr: "KR", flag: "/kr.svg" },
  { language: "Chinese", abbr: "ZH", flag: "/zh.svg" },
];

const categories: MenuItems[] = [
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

const menuItems: MenuItems[] = [
  { title: "IQ Learn", icon: <RiBook2Fill size="25" />, href: "/" },
  { title: "IQ Dashboard", icon: <RiNumbersFill size="20" />, href: "/" },
  { title: "Glossary", icon: <RiStarSFill size="20" />, href: "/" },
  { title: "IQ GPT", icon: <RiSearchEyeFill size="20" />, href: "/" },
  { title: "IQ Code", icon: <RiCodeBoxFill size="20" />, href: "/" },
  { title: "Blog", icon: <RiNewspaperFill size="20" />, href: "/" },
  { title: "BrainDAO", icon: <RiGroup2Fill size="20" />, href: "/" },
];

const wikis: Wikis[] = [
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

const Navbar = () => {
  const [language, setLanguage] = React.useState<string>("English");
  const [abbr, setAbbr] = React.useState<string>("EN");
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="pointer-events-auto shadow-sm sticky dark:border-[#ffffff0f] top-0 left-0 right-0 z-[999] w-full bg-bg-color  border-b  lg:py-2">
      <div className="px-8 h-16 flex gap-8 lg:gap-40 xl:gap-8 items-center justify-between">
        <Link href="/" className="flex gap-2 items-center w-full max-w-fit">
          <Image
            priority
            width="44"
            height="40"
            src="/braindao-logo.svg"
            alt="iq.wiki logo"
          />
          <h1 className="text-xl font-semibold ">IQ.wiki</h1>
        </Link>

        <div className="hidden xl:flex flex-row gap-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="dark:hover:text-text-gray-700 font-semibold text-text-gray-900">
                  Categories
                </NavigationMenuTrigger>

                <NavigationMenuContent className="py-2">
                  <ul className="w-[262px]">
                    {categories.map((category) => (
                      <ListItem
                        href="/"
                        title={category.title}
                        key={category.title}
                        className="hover:dark:text-white"
                      >
                        {category.icon}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {links.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} font-semibold text-text-gray-900 dark:hover:text-text-gray-700`}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenu>
                <NavigationMenuItem className="list-none">
                  <NavigationMenuTrigger className="font-semibold text-text-gray-900 dark:hover:text-text-gray-700">
                    More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="py-2">
                    <ul className="w-[262px]">
                      {menuItems.map((item) => (
                        <ListItem
                          href={item.href}
                          title={item.title}
                          key={item.title}
                          className="hover:dark:text-white"
                        >
                          {item.icon}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <NavSearchField dropdownData={wikis} />

        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className=" text-text-gray-900 hover:bg-transparent dark:hover:text-text-gray-800 font-semibold "
              >
                {abbr} <IoIosArrowDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 py-2 px-0">
              {languages.map((item) => (
                <DropdownMenuCheckboxItem
                  key={item.language}
                  checked={language === item.language}
                  onCheckedChange={() => {
                    setLanguage(item.language);
                    setAbbr(item.abbr);
                  }}
                  className="gap-2 items-center cursor-pointer text-base  dark:hover:bg-[#ffffff14]"
                >
                  <Image
                    src={item.flag}
                    width="24"
                    height="18"
                    alt={`${item.language} flag`}
                  />
                  <p className="text-text-gray-900">{item.language}</p>
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="gap-8 flex items-center">
            <div className="flex items-center space-x-2">
              {isDark ? <FaSun /> : <FaMoon />}
              <Label
                htmlFor="airplane-mode"
                className="text-nowrap text-text-gray-900"
              >
                {theme === "light" ? "Light" : "Dark"} Mode
              </Label>
            </div>
            <Switch
              checked={isDark}
              onClick={() => setTheme(isDark ? "light" : "dark")}
            />
          </div>
          <Drawer
            // title="Navigation"
            // placement="right"
            // onClose={() => setDrawerOpen(false)}
            // open={isDrawerOpen}
            // width={250}
            direction={"top"}
          >
            <DrawerTrigger asChild>
              <IoMdMenu size={28} className="xl:hidden cursor-pointer" />
            </DrawerTrigger>
            <DrawerContent className="mt-[50%]">
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-lg font-semibold"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none dark:hover:bg-[#ffffff14] space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#edf2f7] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex gap-3 items-center">
            <>{children}</>
            <p className="text-md font-semibold text-text-gray-900 ">{title}</p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
