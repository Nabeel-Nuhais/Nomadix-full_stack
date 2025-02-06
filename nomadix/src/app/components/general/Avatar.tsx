"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <div className="rounded-full">
      <Image
        className="rounded-full"
        alt="avatar"
        width="30"
        height="30"
        src="/assets/icons/user.svg"
      />
    </div>
  );
};

export default Avatar;
