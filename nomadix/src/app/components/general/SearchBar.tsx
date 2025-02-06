"use client";

import Image from "next/image";
const SearchBar = () => {
  return (
    <div style={{border: "1px solid black"}} className="w-full md:w-auto py-2 rounded-full shadow-md hover:shadow-xl transition">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm text-white cursor-pointer font-medium pl-4 pr-3">Anywhere</div>
        <div style={{borderRight: "1px solid black", borderLeft: "1px solid black"}} 
        className="hidden cursor-pointer sm:block text-sm text-white font-medium px-3 flex-1 text-center">
          Any Week
        </div>

        <div
          className="
        text-sm pl-3 pr-2 text-white flex flex-row items-center gap-3"
        >
          <div className="hidden cursor-pointer sm:block">Add Guests</div>
          <div className="p-2 cursor-pointer bg-[#06D6A0] w-[75%] sm:w-[25%] rounded-full text-white">
            <Image
              alt="search"
              src="/assets/icons/search.svg"
              height="100"
              width="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
