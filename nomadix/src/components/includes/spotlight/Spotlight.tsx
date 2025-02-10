"use client";

import Container from "../../general/wrapper/Container";
import Image from "next/image";

const Spotlight = () => {
  return (
    <div
      className="pt-6"
      style={{ height: "calc(100vh - 82px)", margin: "auto 0 0" }}
    >
      <Container>
        <div style={{}} className="xl:pt-20 md:pt-10 sm:pt-4 pt-2">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Embrace the Beauty of Rural Escapes
          </h1>
          <p className="text-base md:text-lg font-normal pb-10 pt-2.5 w-fit">
            Explore unique stays in remote villages, countryside retreats, and
            traditional nomadic homes. Experience the beauty of off-the-grid
            living!
          </p>
          <div className="flex flex-col items-center md:flex-row md:items-center gap-2 w-fit">
            <p className="text-base md:text-lg">
              Discover millions of houses and rooms for rent.
            </p>
            <button
              style={{ border: "1px solid #ddd" }}
              className="rounded-full shadow hover:shadow-lg cursor-pointer transition w-fit"
            >
              <div className="w-[32px]">
                <Image
                  src="assets/icons/down-arrow.svg"
                  alt="arrow"
                  height={0}
                  width={0}
                />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Spotlight;
