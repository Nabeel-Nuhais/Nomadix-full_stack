"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../../general/Avatar";
import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

import LogoutButton from "@/components/includes/navbar/LogoutButton";
import PostSpaceButton from "./PostSpaceButton";

interface UserMenuProps {
  userId?: string | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ userId }) => {
  const router = useRouter();
  const pathname = usePathname();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false)
  }, [userId])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="">
          <PostSpaceButton userId={userId} />
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
            // style={{ border: "1px solid #ddd" }}
            className="absolute rounded-xl w-[40vw] shadow-md md:w-3/4 bg-white right-0 top-12 text-sm"
          >
            <div className="flex flex-col cursor-pointer">
              {/* <>
                  <MenuItem onClick={() => {}} label="My trips" />
                  <MenuItem onClick={() => {}} label="My favorites" />
                  <MenuItem onClick={() => {}} label="My reservation" />
                  <MenuItem onClick={() => {}} label="Post my space" />
                  <hr />
                  <MenuItem onClick={() => {}} label="Logout" />
                </> */}
              {userId ? (
                <>
                  <MenuItem
                    onClick={() => {
                      router.push("/myproperties");
                    }}
                    label="My properties"
                  />
                  <MenuItem
                    onClick={() => {
                      router.push("/myreservations");
                    }}
                    label="My reservations"
                  />
                  <MenuItem
                    onClick={() => {
                      router.push("/myfavorites");
                    }}
                    label="My favorites"
                  />
                  <hr className="border border-solid border-gray-100" />
                  <LogoutButton onLogout={() => setIsOpen(false)} />
                </>
              ) : (
                <>
                  <MenuItem onClick={() => {loginModal.onOpen(); setIsOpen(false)}} label="Login" />
                  <MenuItem onClick={() => {registerModal.onOpen(); setIsOpen(false)}} label="Sign up" />
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
