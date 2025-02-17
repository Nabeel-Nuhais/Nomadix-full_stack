"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../../general/avatar/Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-base bg-transparent font-semibold py-2 px-3 rounded-full hover:bg-[#25D1D1] hover:text-white transition cursor-pointer"
        >
          Post your space
        </div>
        <div
          onClick={toggleOpen}
          style={{ border: "1px solid #ddd" }}
          className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ border: "1px solid #ddd" }}
            className="absolute rounded-xl w-[40vw] shadow-md md:w-3/4 bg-white right-0 top-12 text-sm"
          >
            <div className="flex flex-col cursor-pointer">
              <MenuItem onClick={loginModal.onOpen} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign up" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
