import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiGlobalLine, RiMoreFill } from "react-icons/ri";
import { languages } from "../data";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuItems, mobileNavLinks } from "../reusbales/navbarData";
import { discoveries, hiddenNav, listData, socialIcons } from "./footerData";

interface TextBoxProps {
  title: string;
  description: string;
  button: React.ReactNode;
}

const TextBox = ({ title, description, button }: TextBoxProps) => (
  <div className="flex flex-col justify-center lg:justify-normal items-center lg:items-start lg:w-[450px] gap-4">
    <h1 className="text-xl font-bold">{title}</h1>
    <p className="font-medium">{description}</p>
    {button}
  </div>
);

interface ListDisplayProps {
  title: string;
  items: { text: string; link: string; subtext?: string }[];
}

const ListDisplay = ({ title, items }: ListDisplayProps) => {
  return (
    <div className="flex items-center md:items-start gap-2 flex-col col-span-1">
      <h2 className="font-bold">{title}</h2>
      {items.map(({ text, link, subtext }) => (
        <div key={text} className="flex items-center gap-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-medium"
          >
            {text}
          </a>
          {subtext && (
            <div className="whitespace-nowrap flex items-center justify-center py-3 px-2 h-4 w-fit bg-brand-500 text-white rounded-md dark:bg-brand-800 text-[10px]">
              <p> {subtext}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

interface Props {
  SetNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  navbar: boolean;
}

const Footer = ({ SetNavbar, navbar }: Props) => {
  const [language, setLanguage] = React.useState<string>("English");
  const [abbr, setAbbr] = React.useState<string>("EN");

  return (
    <>
      <div className="bg-gray-100 dark:bg-alpha-50">
        <div className="custom-container py-10 lg:py-20 relative px-4 lg:px-8 2xl:px-0">
          <h1 className="font-bold text-2xl">Discover More</h1>
          <div className="flex flex-wrap mt-8 gap-4">
            {discoveries.map((discovery) => (
              <div
                key={discovery}
                className="cursor-pointer rounded-full text-xs lg:text-xl border-2 border-gray-300 px-4 py-1 text-gray-600 dark:border-gray-700 dark:text-alpha-900 hover:bg-gray-200 dark:hover:bg-alpha-50 transition-colors duration-300 delay-150 ease-in-out"
              >
                <p>{discovery}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-brand-background text-white">
        <div className=" 2xl:max-w-[80%] w-[100%] mx-auto py-5 px-4">
          <div className="py-10 grid-cols-1 grid lg:grid-cols-2 gap-8 lg:gap-0">
            <TextBox
              title="Join the IQ Brainlist"
              description="Sign up for the IQ Brainlist to get access to editing on the
              IQ.wiki site!"
              button={
                <Button className="hover:bg-brand-500/80 dark:bg-brand-800 text-white bg-brand-500 h-12 w-fit px-10 text-md font-bold rounded-sm">
                  Join Now
                </Button>
              }
            />
            <TextBox
              title="Subscribe to our newsletter"
              description="The IQ Ecosystem Report will keep you updated on everything IQ."
              button={
                <Button className="hover:bg-white/90 text-black bg-white h-12 w-fit px-10 text-md font-bold rounded-sm">
                  Subscribe
                </Button>
              }
            />
          </div>

          <Separator className="my-1 opacity-60 " />

          <div className="md:grid gap-12 lg:gap-0 lg:grid-cols-12  py-10">
            <div className="mb-6 md:mb-0 col-span-8 flex lg:items-start items-center justify-center  flex-col gap-1 lg:col-span-5">
              <Image
                priority
                width="44"
                height="40"
                src="/braindao-logo.svg"
                alt="iq.wiki logo"
              />
              <h1 className="text-xl font-semibold">IQ.wiki</h1>

              <p className="pb-6 md:pb-0 text-center lg:text-left w-[80%] font-medium">
                IQ.wiki&apos;s vision is to bring blockchain knowledge to the
                world and knowledge onto the blockchain. A part of{" "}
                <Link target="_blank" href="https://www.brainfund.com/">
                  Brainfun group
                </Link>
              </p>
              <div className="pt-4 grid grid-cols-5 md:grid-cols-7 gap-3">
                {socialIcons.map(({ icon, link }) => (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:bg-brand-600 text-white flex items-center justify-center dark:bg-brand-800  bg-brand-500  w-14 h-12 text-md font-bold rounded-sm"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-3 md:pt-0 col-span-7">
              <div className="grid md:grid-cols-4 gap-12 md:gap-16 grid-cols-2">
                {listData.map(({ title, items }) => (
                  <ListDisplay key={title} title={title} items={items} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <Separator className="mt-2 opacity-60 " />
            <div className="flex flex-col gap-5 lg:flex-row justify-center lg:justify-between items-center  py-4">
              <p className="text-center text-sm font-medium">
                © 2024 IQ.wiki Powered By BrainDAO & IQ
              </p>
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 ">
                      <RiGlobalLine className="text-white h-6 w-6" />
                      <p className="gap-2 text-white text-sm font-medium ">
                        {abbr}
                      </p>
                      <IoIosArrowDown className="-ml-0.5 mt-1 w-3 h-3" />
                    </div>
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
            </div>
          </div>
        </div>

        <div className="md:hidden fixed bottom-0 bg-bg-color  w-full border-t border-gray-200 dark:border-[#ffffff0f] h-[72px] px-4 flex items-center justify-between z-30">
          {hiddenNav.map(({ text, link, icon }) => (
            <a
              href={link}
              key={text}
              className={`flex flex-col gap-2 items-center ${
                window.location.pathname === link
                  ? "text-brand-800"
                  : "text-brand-500 dark:text-[#ffffff7a]"
              } active:text-brand-800`}
            >
              {icon}
              <span className="text-[10px]"> {text}</span>
            </a>
          ))}
          <Sheet onOpenChange={() => SetNavbar(!navbar)}>
            <SheetTrigger>
              <div className="cursor-pointer flex flex-col gap-2 items-center text-brand-500 dark:text-[#ffffff7a] active:text-brand-800">
                <RiMoreFill className="h-5 w-5" />
                <span className="text-[10px]"> More</span>
              </div>
            </SheetTrigger>
            <SheetContent className="px-0 z-[9999] w-full">
              <SheetHeader className="pb-3 border-b border-gray-300 dark:border-gray-600">
                <SheetTitle className="px-6 flex gap-2 items-center w-full max-w-fit">
                  <Image
                    priority
                    width="44"
                    height="40"
                    src="/braindao-logo.svg"
                    alt="iq.wiki logo"
                  />
                  <p className="text-xl font-semibold ">IQ.wiki</p>
                </SheetTitle>
                <SheetClose className="hidden" />
              </SheetHeader>
              <div className="text-gray-600 dark:text-white/80 pt-5 px-4 lg:px-10 flex flex-col gap-5">
                {menuItems.map(({ icon, title }) => (
                  <div
                    key={title}
                    className="cursor-pointer flex items-center gap-4"
                  >
                    {icon}
                    <p className="text-lg font-semibold">{title}</p>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </footer>
    </>
  );
};

export default Footer;
