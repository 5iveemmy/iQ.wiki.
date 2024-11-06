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
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import {
  categories,
  links,
  menuItems,
  mobileNavLinks,
  wikis,
} from "./navbarData";
import { languages } from "../data";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTelegramFill,
  RiTwitterFill,
} from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import MobileSearchDialog from "./mobileSearchDialog";

interface Props {
  navbar: boolean;
}

const Navbar = ({ navbar }: Props) => {
  const [language, setLanguage] = React.useState<string>("English");
  const [abbr, setAbbr] = React.useState<string>("EN");
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <>
      <div
        className={`${
          navbar ? "hidden" : "block"
        } pointer-events-auto shadow-sm sticky dark:border-[#ffffff0f] top-0 left-0 right-0 z-[999] w-full bg-bg-color  border-b  lg:py-2`}
      >
        <div className="px-4 lg:px-8 h-16 flex gap-8 lg:gap-40 xl:gap-8 items-center justify-between">
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
                  <NavigationMenuTrigger className="dark:hover:text-text-color/50 font-semibold text-text-gray-900">
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
                        className={`${navigationMenuTriggerStyle()} font-semibold text-text-gray-900 dark:hover:text-text-color/50`}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                <NavigationMenu>
                  <NavigationMenuItem className="list-none">
                    <NavigationMenuTrigger className="font-semibold text-text-gray-900 dark:hover:text-text-color/50">
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

          <div className="hidden lg:block w-full">
            <NavSearchField dropdownData={wikis} />
          </div>

          <div className="flex gap-4 items-center">
            <div className="hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-0 text-text-gray-900 hover:bg-transparent dark:hover:text-text-color/50 font-semibold "
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
            </div>

            <div className="gap-4 lg:gap-8 flex items-center">
              <div className="hidden lg:flex  items-center space-x-2">
                {isDark ? <FaSun /> : <FaMoon />}
                <Label
                  htmlFor="airplane-mode"
                  className="text-nowrap text-text-gray-900"
                >
                  {theme === "light" ? "Light" : "Dark"} Mode
                </Label>
              </div>

              <div className="block lg:hidden">
                <MobileSearchDialog dropdownData={wikis} />
              </div>

              <Switch
                checked={isDark}
                onClick={() => setTheme(isDark ? "light" : "dark")}
              />
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden ">
              {isOpen ? <AiOutlineClose size={28} /> : <IoMdMenu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className={` ${
            isOpen ? "block" : "hidden"
          } fixed top-[65px] left-0 right-0 z-[999] bg-bg-color overflow-y-auto`}
          style={{
            animation: isOpen
              ? "smoothExpand 0.7s ease-in-out forwards"
              : "smoothCollapse 0.7s ease-in-out forwards",
          }}
        >
          <CollapsibleContent className=" flex flex-col justify-between h-[calc(100vh-64px)]">
            <div className="border-t border-gray-300 dark:border-gray-600  text-gray-600 dark:text-white/80 pt-4 px-4 lg:px-10 flex flex-col gap-5">
              {" "}
              {mobileNavLinks.map(({ icon, title }) => (
                <div
                  key={title}
                  className="cursor-pointer flex items-center gap-4"
                >
                  {icon}
                  <p className="text-lg font-semibold">{title}</p>
                </div>
              ))}
            </div>
            <footer className="flex gap-8 justify-center items-center h-[65px] mb-2 border-t border-gray-300 dark:border-gray-600  text-gray-600 dark:text-white/80">
              <RiInstagramFill className="w-5 h-5" />
              <RiLinkedinFill className="w-5 h-5" />
              <RiFacebookFill className="w-5 h-5" />
              <RiTelegramFill className="w-5 h-5" />
              <RiTwitterFill className="w-5 h-5" />
            </footer>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
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
