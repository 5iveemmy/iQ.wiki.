import Image from "next/image";
import React from "react";

interface WikiBoxProps {
  img: string;
  title: string;
  desc: string;
  setSearchTerm?: (term: string) => void;
}

const WikiBox: React.FC<WikiBoxProps> = ({
  img,
  title,
  desc,
  setSearchTerm,
}) => {
  return (
    <div
      className="flex gap-4 px-5 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#ffffff14] border-t"
      onMouseDown={() => setSearchTerm && setSearchTerm(title)}
    >
      <div className="w-[58px] h-[46px] aspect-square rounded-md">
        <Image
          src={img}
          width={58}
          height={46}
          alt="wiki image"
          className="w-full h-full object-fill rounded-md"
        />
      </div>
      <div className="flex flex-col ">
        <p className="text-sm font-semibold text-text-gray-800">{title}</p>
        <p className="text-xs font-medium text-text-gray-800">{desc}</p>
      </div>
    </div>
  );
};

export default WikiBox;
