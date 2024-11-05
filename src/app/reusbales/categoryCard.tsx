import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  name: string;
  description: string;
  timeEdited: string;
  author: {
    name: string;
    avatar: string;
  };
  noHoverEffect?: boolean;
}

const CategoryCard = ({
  img,
  name,
  description,
  timeEdited,
  author,
  noHoverEffect,
}: Props) => {
  return (
    <div
      className={`"cursor-pointer flex flex-col gap-2 border dark:border-gray-700 border-gray-200 rounded-xl pb-2 ${
        noHoverEffect
          ? ""
          : "hover:scale-105 transition-transform duration-300 ease-in-out"
      } "`}
    >
      <div className="h-80 md:h-72 xl:h-60">
        <Image
          alt="test"
          width="450"
          height="450"
          src={img}
          className="rounded-t-lg w-full h-full object-cover transition-opacity duration-100 ease-in opacity-100"
        />
      </div>
      <div className="p-4">
        <div className="h-20">
          <h1 className="text-text-color text-sm lg:text-lg font-semibold mb-2">
            {name}
          </h1>
          <p className="dark:text-alpha-800 text-gray-600 text-xs lg:text-sm">
            {description}
          </p>
        </div>
        <div className="flex flex-row justify-between items-center mt-6 w-full">
          <div className="flex flex-row gap-2 items-center">
            <Avatar className="w-[26px] h-[26px]">
              <AvatarImage src={author.avatar} />
              <AvatarFallback className="text-xs">CN</AvatarFallback>
            </Avatar>
            <a className="text-brand-500 dark:text-brand-800 text-xs xl:text-sm hover:underline transition-all duration-300 ease-in-out">
              {author.name}
            </a>
          </div>
          <div className="text-gray600 dark:text-alpha-800 text-xs xl:text-xs">
            Edited {timeEdited} ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
