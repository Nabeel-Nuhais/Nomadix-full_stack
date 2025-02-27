"use client";

import Image from "next/image";
import { PropertyType } from "./PropertyList";
import { useRouter } from "next/navigation";
import FavoriteButton from "@/components/general/FavortieButton";

interface PropertyProps {
  property: PropertyType;
  markFavorite?: (is_favorite: boolean) => void;
}

const PropertyListitem: React.FC<PropertyProps> = ({
  property,
  markFavorite,
}) => {
  const router = useRouter();
  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => router.push(`/properties/${property.id}`)}
      >
        <div className="relative overflow-hidden aspect-square rounded-xl w-[100%] h-[300px]">
          <Image
            src={property.image_url}
            alt="forest"
            fill
            sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
            className="hover:scale-110 object-cover transition"
          />

          {markFavorite && (
            <FavoriteButton
              id={property.id}
              is_favorite={property.is_favorite}
              markFavaorite={(is_favorite) => markFavorite(is_favorite)}
            />
          )}
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
