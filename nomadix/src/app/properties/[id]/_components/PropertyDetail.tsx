"use client";

import ReservationSidebar from "@/components/includes/properties/ReservationSidebar";
import Container from "../../../../components/general/Container";
import Image from "next/image";

const PropertyDetailPage = () => {
  return (
    <>
      <Container>
        <main className="pb-6">
          <div className="relative mt-6 mb-6 w-full h-[64vh] overflow-hidden rounded-xl">
            <Image
              src="/assets/images/forest-room.jpg"
              fill
              alt="forest"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="col-span-3 pr-6">
              <h1 className="mb-4 font-semibold text-xl">Property name</h1>

              <span className="mb-6 block text-base text-gray-600">
                4 guests - 2 bedrooms - 1 bathroom
              </span>

              <hr className="border border-solid border-[#d5d5d5]" />

              <div className="py-6 flex items-center space-x-4">
                <div className="w-[30px]">
                  <Image
                    src="/assets/icons/user.svg"
                    width={50}
                    height={50}
                    alt="username"
                    className="rounded-full"
                  />
                </div>

                <p>
                  <strong>John Doe</strong> is your host
                </p>
              </div>

              <hr className="border border-solid border-[#d5d5d5]" />

              <p className="mt-6 text-base font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos quod sit eos ad sed pariatur, magnam assumenda culpa
                omnis amet, animi tempora exercitationem aperiam sequi, minus
                atque dolorum ab totam.
              </p>
            </div>
              <ReservationSidebar />
          </div>
        </main>
      </Container>
    </>
  );
};

export default PropertyDetailPage;
