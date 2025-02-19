"use client";

import Container from "@/components/general/Container";
import ChatDetail from "@/components/includes/inbox/ChatDetail";

const Chat = () => {
  return (
    <>
      <Container>
        <div className="mt-10 space-y-4">
          <ChatDetail />
        </div>
      </Container>
    </>
  );
};

export default Chat;
