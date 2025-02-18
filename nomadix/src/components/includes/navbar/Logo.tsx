"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-0.5 cursor-pointer">
        <div className="w-[35px]">
          <Image
            alt="logo"
            className="md:block"
            height="100"
            width="100"
            src="/assets/icons/logo.svg"
          />
        </div>
        <h1 className="hidden md:block text-[#25D1D1] leading-none text-2xl font-semibold">
          nomadix
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
