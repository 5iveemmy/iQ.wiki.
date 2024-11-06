"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import WikiBox from "./wikiBox";

interface Props {
  dropdownData: Wikis[];
}

const MobileSearchDialog = ({ dropdownData }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState<Wikis[]>(dropdownData);

  React.useEffect(() => {
    setFilteredData(
      dropdownData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, dropdownData]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IoIosSearch className="w-7 h-6 " />
      </DialogTrigger>
      <DialogContent className="font-[family-name:var(--font-Montserrat)] z-[9999] w-screen h-screen max-w-full p-0 m-0">
        <div className="h-full flex flex-col">
          <DialogHeader className=" top-0 left-0 right-0 sticky py-4 border-b border-gray-300 dark:border-gray-600">
            <DialogTitle className="px-[10px] lg:px-6 flex gap-2 items-center w-full ">
              <IoIosSearch className="w-7 h-6 pt-1 text-[#647484]" />
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-sm dark:text-text-gray-900  text-[#647484] border-none bg-bg-color dark:placeholder:text-slate-400 placeholder:font-normal  placeholder:text-sm placeholder:text-[#647484]  focus:outline-none "
                placeholder="Search for wikis, categories, tags and users"
              />
            </DialogTitle>
          </DialogHeader>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <WikiBox
                key={item.title}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))
          ) : (
            <div className="flex justify-center items-center py-8">
              <p className="text-sm font-semibold">
                The wiki you just searched is not available.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileSearchDialog;
