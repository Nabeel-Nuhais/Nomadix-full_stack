"use client";

import Image from "next/image";
import useSearchModal, { SearchQuery } from "@/hooks/useSearchModal";
import { useState } from "react";

const Category = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState("");

  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
      country: searchModal.query.country,
      checkIn: searchModal.query.checkIn,
      checkOut: searchModal.query.checkOut,
      guests: searchModal.query.guests,
      bedrooms: searchModal.query.bedrooms,
      bathrooms: searchModal.query.bathrooms,
      category: _category,
    };

    searchModal.setQuery(query);
  };

  const categories = [
    { name: "All", value: "", icon: "/assets/icons/all.svg" },
    { name: "Beach", value: "Beach", icon: "/assets/icons/beach.svg" },
    { name: "Bamboo", value: "Bamboo", icon: "/assets/icons/bamboo.svg" },
    { name: "Forest", value: "Forest", icon: "/assets/icons/forest.svg" },
    { name: "Lake", value: "Lake", icon: "/assets/icons/lake.svg" },
  ];

  return (
    <div className="pt-6">
      <div className="py-5 text-2xl font-semibold">
        <h3>Categories</h3>
      </div>
      <div className="cursor-pointer pb-6 flex items-center space-x-12">
        {categories.map((item) => (
          <div
            key={item.value}
            onClick={() => _setCategory(item.value)}
            className={`pb-2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 
              border-b-2 border-solid ${
                category === item.value ? "border-[#000]" : "border-transparent"
              }`}
          >
            <div className="w-[30px]">
              <Image
                src={item.icon || "/assets/icons/beach.svg"}
                alt={item.name}
                width={20}
                height={20}
              />
            </div>
            <span className="text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

