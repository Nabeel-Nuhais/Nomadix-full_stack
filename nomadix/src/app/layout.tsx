import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/includes/navbar/Navbar";
import Spotlight from "../components/includes/spotlight/Spotlight";

import ToasterProvider from "@/providers/ToasterProvider";
import { AuthProvider } from "@/context/AuthContext";

import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import PostSpaceModal from "@/components/modals/PostSpaceModal";
import SearchModal from "@/components/modals/SearchModal";

export const metadata = {
  title: "Nomadix",
  description: "Explore unique rural stays with Nomadix",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="flex flex-col min-h-screen">
          <ToasterProvider />
          <Navbar />
          <RegisterModal />
          <LoginModal />
          <PostSpaceModal />
          <SearchModal />
          <div className="pt-[82px] flex-grow">{children}</div>
        </body>
      </html>
    </AuthProvider>
  );
}
