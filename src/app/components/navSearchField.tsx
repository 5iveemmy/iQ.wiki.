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

type InputWithDropdownProps = {
  dropdownData: string[];
};

const NavSearchField: React.FC<InputWithDropdownProps> = ({ dropdownData }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [filteredData, setFilteredData] =
    React.useState<string[]>(dropdownData);

  React.useEffect(() => {
    setFilteredData(
      dropdownData.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
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
        className="w-[450px] mt-2 rounded-xl px-0"
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
        {filteredData.map((item, index) => (
          <li
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-100"
            onMouseDown={() => setSearchTerm(item)}
          >
            {item}
          </li>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default NavSearchField;
