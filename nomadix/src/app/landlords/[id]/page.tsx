"use client";

import Image from "next/image";

import Container from "@/components/general/Container";
import Button from "@/components/general/Button";
import PropertyList from "@/components/includes/properties/PropertyList";
const LandlordPage = () => {
  return (
    <>
      <Container>
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 mb-4">
              <div className="flex flex-col items-center p-6 rounded-xl border border-solid border-[#d5d5d5] shadow-md">
                <div className="w-[30px]">
                  <Image
                    src="/assets/icons/user.svg"
                    alt="host"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <h1 className="mt-6 text-base font-medium">Host Name</h1>
                <div className="w-full mt-3">
                  <Button onClick={() => {}} label="Contact" />
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <PropertyList />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LandlordPage;
