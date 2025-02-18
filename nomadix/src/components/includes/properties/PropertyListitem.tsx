"use client";

import Image from "next/image";
const PropertyListitem = () => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="relative overflow-hidden aspect-square rounded-xl w-[100%] h-[300px]">
          <Image
            src="/assets/images/forest-room.jpg"
            alt="forest"
            fill
            sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
            className="hover:scale-110 object-cover transition"
          />
        </div>
        <div className="mt-2">
          <p className="text-medium font-bold">Property name</p>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            <strong>$200</strong> per night{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyListitem;
