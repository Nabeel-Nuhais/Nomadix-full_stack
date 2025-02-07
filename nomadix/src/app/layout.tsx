import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/includes/navbar/Navbar";
import Spotlight from "../components/includes/spotlight/Spotlight";
import RegisterModal from "@/components/modals/RegisterModal";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        style={{
          backgroundImage: "url('assets/images/spotlight.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col min-h-screen"
      >
        <RegisterModal />
        <Navbar />
        <div className="">{children}</div>
        <Spotlight />
      </body>
    </html>
  );
}
