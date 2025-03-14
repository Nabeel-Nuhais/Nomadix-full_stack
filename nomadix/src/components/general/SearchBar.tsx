"use client";

import Image from "next/image";
import useSearchModal from "@/hooks/useSearchModal";
const SearchBar = () => {
  const searchModal = useSearchModal();
  return (
    <div
      onClick={() => {searchModal.onOpen('location')}}
      style={{ border: "1px solid #ddd" }}
      className="w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm cursor-pointer font-medium pl-4 pr-3">
          Anywhere
        </div>
        <div
          style={{
            borderRight: "1px solid #ddd",
            borderLeft: "1px solid #ddd",
          }}
          className="hidden cursor-pointer sm:block text-sm font-medium px-3 flex-1 text-center"
        >
          Any Week
        </div>

        <div
          className="
        text-sm pl-3 pr-2 text-neutral-600 flex flex-row items-center gap-3"
        >
          <div className="hidden cursor-pointer sm:block">Add Guests</div>
          <div className="p-2 cursor-pointer bg-[#25D1D1] w-[75%] sm:w-[25%] rounded-full text-white">
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
