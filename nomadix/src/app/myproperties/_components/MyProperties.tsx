"use client";

import Container from "@/components/general/Container";
import PropertyList from "@/components/includes/properties/PropertyList";

const MyProperties = () => {
  return (
    <>
      <Container>
        <div className="mt-10">
          <h1 className="mb-4 text-2xl font-semibold">My properties</h1>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <PropertyList />
              </div>
        </div>
      </Container>
    </>
  );
};

export default MyProperties;
