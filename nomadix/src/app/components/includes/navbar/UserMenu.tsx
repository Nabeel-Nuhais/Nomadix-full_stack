"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../../general/Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden md:block text-white text-base bg-transparent font-semibold py-2 px-3 rounded-full hover:bg-[#06D6A0] transition cursor-pointer"
        >
          Post your space
        </div>
        <div
          onClick={toggleOpen}
          style={{ border: "1px solid #1E1A1A" }}
          className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-xl transition"
        >
          <div className="text-white">

          <AiOutlineMenu />
          </div>
          <div className="hidden md:block ">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          style={{ border: "1px solid #f6f6f6"  }}
          className="absolute rounded-xl w-[40vw] shadow-lg md:w-3/4 bg-white right-0 top-12 text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => {}} label="Login" />
            <MenuItem onClick={() => {}} label="Sign up" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
