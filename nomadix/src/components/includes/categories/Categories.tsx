"use client";

import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ dataCategory, setCategory }) => {
  const categories = [
    { name: "Beach", icon: "/assets/icons/beach.svg" },
    { name: "Bamboo", icon: "/assets/icons/bamboo.svg" },
    { name: "Forest", icon: "/assets/icons/forest.svg" },
    { name: "Lake", icon: "/assets/icons/lake.svg" },
  ];

  return (
    <div className="pt-3 cursor-pointer flex items-center space-x-12">
      {categories.map((item) => (
        <div
          key={item.name}
          onClick={() => setCategory(item.name)}
          className={`pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 
          border-b-2 border-solid ${dataCategory === item.name ? "border-[#000]" : "border-transparent"} 
          hover:border-gray-200`}
        >
          <div className="w-[30px]">
            <Image src={item.icon} alt={item.name} width={20} height={20} />
          </div>
          <span className="text-xs">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
