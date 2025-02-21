"use client";

import Container from "../../general/Container";
import Logo from "./Logo";
import SearchBar from "../../general/SearchBar";
import UserMenu from "./UserMenu";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { userId } = useAuth(); // Get user state from context

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm h-[82px]">
      <div className="py-4" style={{ borderBottom: "1px solid #f6f6f6" }}>
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <SearchBar />
            <UserMenu userId={userId} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
