"use client";

import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div
          onClick={() => setCategory("Beach")}
          className={`pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 border-b-2 border-solid ${
            dataCategory == "Beach" ? "border-[#000]" : "border-white"
          } hover:border-gray-200 hove:opacity-100`}
        >
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

        <div
          onClick={() => setCategory("Bamboo")}
          className={`pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 border-b-2 border-solid ${
            dataCategory == "Bamboo" ? "border-[#000]" : "border-white"
          } hover:border-gray-200 hove:opacity-100`}
        >
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

        <div
          onClick={() => setCategory("Forest")}
          className={`pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 border-b-2 border-solid ${
            dataCategory == "Forest" ? "border-[#000]" : "border-white"
          } hover:border-gray-200 hove:opacity-100`}
        >
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

        <div
          onClick={() => setCategory("Lake")}
          className={`pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 border-b-2 border-solid ${
            dataCategory == "Lake" ? "border-[#000]" : "border-white"
          } hover:border-gray-200 hove:opacity-100`}
        >
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
    </>
  );
};

export default Categories;
