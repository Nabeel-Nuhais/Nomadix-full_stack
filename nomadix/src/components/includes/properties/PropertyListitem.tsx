"use client";

import Image from "next/image";
import { PropertyType } from "./PropertyList";

interface PropertyProps {
  property: PropertyType;
}

const PropertyListitem: React.FC<PropertyProps> = ({ property }) => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="relative overflow-hidden aspect-square rounded-xl w-[100%] h-[300px]">
          <Image
            src={property.image_url}
            alt="forest"
            fill
            sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
            className="hover:scale-110 object-cover transition"
          />
        </div>
        <div className="mt-2">
          <p className="text-medium font-bold">{property.title}</p>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            <strong>${property.price_per_night}</strong> per night{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyListitem;
