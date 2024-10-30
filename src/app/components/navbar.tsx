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
import { InputWithIcon } from "./InputWIthIcon";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { href: "/", title: "Rank" },
  { href: "/", title: "Activity" },
  { href: "/", title: "About" },
  { href: "/", title: "Events" },
];

const languages = [
  { language: "English", flag: "/us.svg" },
  { language: "Korean", flag: "/kr.svg" },
  { language: "Chinese", flag: "/zh.svg" },
];

const Navbar = () => {
  const [language, setLanguage] = React.useState<string>("English");

  return (
    <div className="shadow-sm fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-gray800 border-b dark:border-alpha-100 border-gray-200 lg:py-2">
      <div className="px-8 h-16 flex gap-8 items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            priority
            width="44"
            height="40"
            src="/braindao-logo.svg"
            alt="iq.wiki logo"
          />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            IQ.wiki
          </h1>
        </Link>

        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" font-semibold text-gray-600">
                  Categories
                </NavigationMenuTrigger>

                <NavigationMenuContent className="py-2">
                  <ul className="w-[262px]">
                    <ListItem href="/" title="People In Crypto">
                      <RiUser3Fill size="25" />
                    </ListItem>
                    <ListItem href="/" title="Cryptocurrencies">
                      <RiBitCoinFill size="20" />
                    </ListItem>
                    <ListItem href="/" title="Decentralized Finance">
                      <RiRecycleFill size="20" />
                    </ListItem>
                    <ListItem href="/" title="Exchanges">
                      <RiCoinFill size="20" />
                    </ListItem>
                    <ListItem href="/" title="NFTs">
                      <RiImage2Fill size="20" />
                    </ListItem>
                    <ListItem href="/" title="Dapps">
                      <RiCopperDiamondLine size="20" />
                    </ListItem>
                    <ListItem href="/" title="DAOs">
                      <RiTeamFill size="20" />
                    </ListItem>
                    <ListItem href="/" title="Organizations">
                      <RiOrganizationChart size="20" />
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {links.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} font-semibold text-gray-600`}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuItem className="list-none">
              <NavigationMenuTrigger className="font-semibold text-gray-600 ">
                Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent className="py-2">
                <ul className="w-[262px]">
                  <ListItem href="/" title="IQ Learn">
                    <RiBook2Fill size="25" />
                  </ListItem>
                  <ListItem href="/" title="IQ Dashboard">
                    <RiNumbersFill size="20" />
                  </ListItem>
                  <ListItem href="/" title="Glossary">
                    <RiStarSFill size="20" />
                  </ListItem>
                  <ListItem href="/" title="IQ GPT">
                    <RiSearchEyeFill size="20" />
                  </ListItem>
                  <ListItem href="/" title="IQ Code">
                    <RiCodeBoxFill size="20" />
                  </ListItem>
                  <ListItem href="/" title="Blog">
                    <RiNewspaperFill size="20" />
                  </ListItem>
                  <ListItem href="/" title="BrainDAO">
                    <RiGroup2Fill size="20" />
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>

        <div className="w-[450px]">
          <InputWithIcon
            type="search"
            endIcon={
              <Button className="bg-gray-200 text-gray-900 font-lg px-2 h-6 hover:bg-gray-200">
                /
              </Button>
            }
            startIcon={IoIosSearch}
            placeholder="Search for wikis, categories, tags and users"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="font-semibold">
              EN <IoIosArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 py-2">
            {languages.map((item) => (
              <DropdownMenuCheckboxItem
                key={item.language}
                checked={language === item.language}
                onCheckedChange={() => setLanguage(item.language)}
                className="gap-2 items-center"
              >
                <Image
                  src={item.flag}
                  width="24"
                  height="18"
                  alt={`${item.language} flag`}
                />
                <p>{item.language}</p>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#edf2f7] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex gap-3 items-center">
            <>{children}</>
            <p className="text-md font-semibold text-gray-600 ">{title}</p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
