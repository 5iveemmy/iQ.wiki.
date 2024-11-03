"use client";
import React from "react";
import PriceDisplay from "../reusbales/priceDisplay";
import Image from "next/image";
import Link from "next/link";

const priceDisaplayData = [
  {
    title: "IQ Price",
    price: "0.0060",
    percentage: "-2.63",
    icon: "/braindao-logo.svg",
  },
  {
    title: "Market Cap",
    price: "116.53M",
    percentage: "2.63",
    icon: "/globe.svg",
  },
];

const exchangeIcons = ["/binance.png", "/upbit.png"];

const Header = () => {
  return (
    <div>
      <div className="pt-16 md:pt-32 pb-60 md:pb-40 lg:pb-32 lg:pt-14 xl:pt-24 relative bg-slate-100 dark:bg-text-color/5  ">
        <div className="absolute top-0 left-0 lg:w-[420px] w-72 lg:h-96 h-60 bg-gradient-to-r from-brand-800/10 to-brand-800/10 blur-3xl" />
        <h1 className="xl:text-6xl text-3xl md:text-5xl lg:text-5xl font-semibold text-center text-gray-900 dark:text-white max-w-6xl mx-auto  font-montserrat">
          The World&apos;s Largest{" "}
          <span className="text-brand-800"> Blockchain & Crypto</span>{" "}
          Encyclopedia{" "}
        </h1>
      </div>
      <section className="-top-52 md:top-[-80px] xl:top-[-60px] relative px-4 lg:px-8 2xl:px-0 container mx-auto">
        <div className="p-4 dark:border-text-color/15  dark:bg-gray-900/40 backdrop-filter backdrop-blur-sm bg-white/30 text-gray-600 rounded-xl dark:text-white flex md:grid xl:grid-cols-5 flex-col md:grid-cols-2 gap-4 flex-wrap border dark:border-alpha-300 border-gray-200">
          {priceDisaplayData.map((item) => (
            <PriceDisplay key={item.title} {...item} />
          ))}
          <PriceDisplay title="Exhanges">
            <div className="flex  gap-3 ">
              {exchangeIcons.map((icon, index) => {
                return (
                  <Link
                    key={icon}
                    href="/"
                    className={`mt-5 ${
                      index !== exchangeIcons.length - 1 ? "border-r  pr-3" : ""
                    }`}
                  >
                    <Image
                      priority
                      width="32"
                      height="32"
                      src={icon}
                      alt="icon"
                    />
                  </Link>
                );
              })}
            </div>
          </PriceDisplay>
        </div>
      </section>
    </div>
  );
};

export default Header;
