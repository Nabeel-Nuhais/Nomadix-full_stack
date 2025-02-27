"use client";

import { useEffect, useState } from "react";
import PropertyListitem from "./PropertyListitem";
import apiService from "@/services/apiService";
import toast from "react-hot-toast";

export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
  is_favorite: boolean;
};

interface PropertyListProps {
  favorites?: boolean | null;
  landlord_id?: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
  landlord_id,
  favorites,
}) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [loading, setLoading] = useState(true);

  const markFavorite = (id: string, is_favorite: boolean) => {
    const tmpProperties = properties.map((property: PropertyType) => {
      if (property.id == id) {
        property.is_favorite = is_favorite;

        if (is_favorite) {
          toast.success("Added to favorites")
          console.log("property added to favorited");
        } else {
          toast.success("Removed from favorites")
          console.log("removed from list");
        }
      }

      return property;
    });

    setProperties(tmpProperties);
  };

  const getProperties = async () => {
    let url = "/api/properties/";

    if (landlord_id) {
      url += `?landlord_id=${landlord_id}`;
    } else if (favorites) {
      url += "?is_favorites=true";
    }

    try {
      const tmpProperties = await apiService.get(url);
      setProperties(
        tmpProperties.data.map((property: PropertyType) => {
          if (tmpProperties.favorites.includes(property.id)) {
            property.is_favorite = true;
          } else {
            property.is_favorite = false;
          }

          return property;
        })
      );
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading properties...</p>
      ) : properties.length > 0 ? (
        properties.map((property) => (
          <PropertyListitem
            markFavorite={(is_favorite: boolean) =>
              markFavorite(property.id, is_favorite)
            }
            key={property.id}
            property={property}
          />
        ))
      ) : favorites ? (
        <p>You don't have any favorite properties yet.</p>
      ) : (
        <p>No properties listed yet.</p>
      )}
    </>
  );
};

export default PropertyList;
