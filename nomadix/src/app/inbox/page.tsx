"use client";

import Container from "@/components/general/Container";
import Conversation from "@/components/includes/inbox/Conversation";
import PropertyList from "@/components/includes/properties/PropertyList";

const InboxPage = () => {
  return (
    <>
      <Container>
        <div className="mt-10 space-y-4">
          <h1 className="mb-4 text-2xl font-semibold">Page</h1>

          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </Container>
    </>
  );
};

export default InboxPage;
