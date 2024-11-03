import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

interface Props {
  title: string;
  price?: string;
  percentage?: string;
  icon?: string;
  children?: React.ReactNode;
}

const PriceDisplay = ({ children, title, percentage, price, icon }: Props) => {
  return (
    <div className="dark:border-text-color/15 bg-transparent backdrop-filter backdrop-blur-sm border dark:border-alpha-300 border-gray-200 rounded-xl p-3 flex flex-col text-sm  w-full">
      <h3 className="text-xs">{title}</h3>
      {children ? (
        <>{children}</>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">${price}</p>

            <Link href="/" className="border rounded-full p-1">
              <Image
                priority
                width="32"
                height="32"
                src={icon as string}
                alt="icon"
              />
            </Link>
          </div>

          <div className="items-center flex gap-1 text-red-500">
            <AiOutlineArrowDown className="w-3 h-3" />
            <p>{percentage}%</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceDisplay;
