import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import * as React from "react";
import { IoIosSearch } from "react-icons/io";
import { InputWithIcon } from "./inputWIthIcons";
import { Cross2Icon } from "@radix-ui/react-icons";
import { PopoverClose } from "@radix-ui/react-popover";

import WikiBox from "./wikiBox";

type InputWithDropdownProps = {
  dropdownData: Wikis[];
};

const NavSearchField: React.FC<InputWithDropdownProps> = ({ dropdownData }) => {
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
    <Popover>
      <PopoverTrigger asChild>
        <InputWithIcon
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          endIcon={
            <PopoverTrigger className="rounded bg-gray-200 text-gray-900 font-lg px-2 h-6 hover:bg-gray-200">
              /
            </PopoverTrigger>
          }
          startIcon={
            <PopoverTrigger className="items-center flex">
              <IoIosSearch className="w-5 h-5 " />
            </PopoverTrigger>
          }
          placeholder="Search for wikis, categories, tags and users"
        />
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="font-[family-name:var(--font-Montserrat)] w-[450px] mt-2 rounded-xl px-0"
      >
        <div className="border-b">
          <div className="flex justify-between pb-3 px-5">
            <h4 className="font-[family-name:var(--font-Montserrat)] text-sm text-gray-600 font-semibold ">
              Popular Wikis
            </h4>
            <PopoverClose>
              <Cross2Icon />
            </PopoverClose>
          </div>
        </div>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <WikiBox
              key={item.title}
              img={item.img}
              title={item.title}
              desc={item.desc}
              setSearchTerm={setSearchTerm}
            />
          ))
        ) : (
          <div className="flex justify-center items-center py-8">
            <p className="text-sm font-semibold">
              The wiki you just searched is not available. You can send us
              suggestions for wikis
            </p>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default NavSearchField;
