"use client";

import Container from "../../general/wrapper/Container";
import Logo from "./Logo";
import SearchBar from "../../general/searchBars/SearchBar";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({currentUser}) => {
  return (
    <div className="fixed w-full bg-transparent z-10 shadow-sm h-[82px]">
      <div className="py-4" style={{ borderBottom: "1px solid #f6f6f6" }}>
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <SearchBar />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
