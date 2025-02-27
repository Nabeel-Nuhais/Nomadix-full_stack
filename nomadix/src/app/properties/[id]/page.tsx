import ReservationSidebar from "@/components/includes/properties/ReservationSidebar";
import Container from "@/components/general/Container";
import Image from "next/image";
import apiService from "@/services/apiService";

import { getUserId } from "@/lib/actions";
import Link from "next/link";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const userId = await getUserId();
  const property = await apiService.get(`/api/properties/${params.id}`);
  return (
    <>
      <Container>
        <main className="pb-6">
          <div className="relative mt-6 mb-6 w-full h-[64vh] overflow-hidden rounded-xl">
            <Image
              src={property.image_url}
              fill
              alt="forest"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-3 pr-6">
              <h1 className="mb-4 font-semibold text-xl">{property.title}</h1>

              <span className="mb-6 block text-base text-gray-600">
                {property.guests} guests - {property.bedrooms} bedrooms -{" "}
                {property.bathrooms} bathroom
              </span>

              <hr className="border border-solid border-[#d5d5d5]" />

              <Link
                href={`/landlords/${property.landlord.id}`}
                className="py-6 flex items-center space-x-4"
              >
                {property.landlord.avatar_url && (
                  <div className="w-[30px]">
                    <Image
                      src={property.landlord.avatar_url}
                      width={50}
                      height={50}
                      alt="username"
                      className="rounded-full"
                    />
                  </div>
                )}

                <p>
                  <strong>{property.landlord.name || "Host name"}</strong> is your host
                </p>
              </Link>

              <hr className="border border-solid border-[#d5d5d5]" />

              <p className="mt-6 text-base font-normal">
                {property.description}
              </p>
            </div>
            <ReservationSidebar userId={userId} property={property} />
          </div>
        </main>
      </Container>
    </>
  );
};

export default PropertyDetailPage;
