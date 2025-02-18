"use client";

import { useRef } from "react";
import Spotlight from "@/components/includes/spotlight/Spotlight";
import Categories from "../components/includes/categories/Categories";
import PropertyList from "@/components/includes/properties/PropertyList";
import Container from "../components/general/Container";

export default function Home() {
  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollToCategories = () => {
    if (categoriesRef.current) {
      window.scrollTo({
        top: categoriesRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <Spotlight onArrowClick={scrollToCategories} />
      <Container>
        <div ref={categoriesRef}>
          <Categories />
          <div className="mt-4 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PropertyList />
          </div>
        </div>
      </Container>
    </div>
  );
}
