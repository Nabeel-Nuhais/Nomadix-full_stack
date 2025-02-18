"use client";

import Image from "next/image";

const Categories = () => {
  return (
    <div className="pt-6">
      <div className="py-5 text-2xl font-semibold">
        <h3>Categories</h3>
      </div>
      <div className="cursor-pointer pb-6 flex items-center space-x-12">
        <div className="pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 border-b-2 border-solid border-[#fff] hover:border-[#000]">
          <div className="w-[30px]">
            <Image
              src="/assets/icons/beach.svg"
              alt="beach"
              width={20}
              height={20}
            />
          </div>
          <span className="text-xs">Beach</span>
        </div>

        <div className="pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 border-b-2 border-solid border-[#fff] hover:border-[#000]">
          <div className="w-[30px]">
            <Image
              src="/assets/icons/bamboo.svg"
              alt="beach"
              width={20}
              height={20}
            />
          </div>
          <span className="text-xs">Bamboo</span>
        </div>

        <div className="pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 border-b-2 border-solid border-[#fff] hover:border-[#000]">
          <div className="w-[30px]">
            <Image
              src="/assets/icons/forest.svg"
              alt="beach"
              width={20}
              height={20}
            />
          </div>
          <span className="text-xs">Forest</span>
        </div>

        <div className="pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 border-b-2 border-solid border-[#fff] hover:border-[#000]">
          <div className="w-[30px]">
            <Image
              src="/assets/icons/lake.svg"
              alt="beach"
              width={20}
              height={20}
            />
          </div>
          <span className="text-xs">Lake</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
