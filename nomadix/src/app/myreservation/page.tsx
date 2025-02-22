"use client";

import Button from "@/components/general/Button";
import Container from "@/components/general/Container";
import Image from "next/image";

const MyReservationPage = () => {
  return (
    <>
      <Container>
        <div className="mt-10">
          <h1 className="mb-4 text-2xl font-semibold">My reservations</h1>
          <div className="space-y-4">
            <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-solid border-[#f2f2f2] rounded-xl">
              <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    src="/assets/images/forest-room.jpg"
                    fill
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="forest house"
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-3">
                <h2 className="mb-4 text-xl font-medium">Property name</h2>

                <p className="mb-2">
                  <strong>Check in date:</strong> 14/02/2024
                </p>
                <p className="mb-2">
                  <strong>Check out date:</strong> 18/02/2024
                </p>

                <p className="mb-2">
                  <strong>Number of nights:</strong> 3
                </p>
                <p className="mb-2">
                  <strong>Total price:</strong> $240
                </p>
                <div className="inline-block mt-2">
                  <Button onClick={() => {}} label="Go to property" />
                </div>
              </div>
            </div>

            <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-solid border-[#f2f2f2] rounded-xl">
              <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    src="/assets/images/forest-room.jpg"
                    fill
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="forest house"
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-3">
                <h2 className="mb-4 text-xl font-medium">Property name</h2>

                <p className="mb-2">
                  <strong>Check in date:</strong> 14/02/2024
                </p>
                <p className="mb-2">
                  <strong>Check out date:</strong> 18/02/2024
                </p>

                <p className="mb-2">
                  <strong>Number of nights:</strong> 3
                </p>
                <p className="mb-2">
                  <strong>Total price:</strong> $240
                </p>
                <div className="inline-block mt-2">
                  <Button onClick={() => {}} label="Go to property" />
                </div>
              </div>
            </div>

            <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-solid border-[#f2f2f2] rounded-xl">
              <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                  <Image
                    src="/assets/images/forest-room.jpg"
                    fill
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="forest house"
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-3">
                <h2 className="mb-4 text-xl font-medium">Property name</h2>

                <p className="mb-2">
                  <strong>Check in date:</strong> 14/02/2024
                </p>
                <p className="mb-2">
                  <strong>Check out date:</strong> 18/02/2024
                </p>

                <p className="mb-2">
                  <strong>Number of nights:</strong> 3
                </p>
                <p className="mb-2">
                  <strong>Total price:</strong> $240
                </p>
                <div className="inline-block mt-2">
                  <Button onClick={() => {}} label="Go to property" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MyReservationPage;
