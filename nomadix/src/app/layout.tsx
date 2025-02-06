import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/includes/navbar/Navbar";
import Spotlight from "./components/includes/spotlight/Spotlight";

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
      <body style={{
         backgroundImage: "url('assets/images/spotlight.jpg')", 
         backgroundSize: "cover", // Ensures the image covers the div
         backgroundPosition: "center", // Centers the image
         backgroundRepeat: "no-repeat", // Prevents repeating
         borderRadius: "10px", // Optional: adds rounded corners
      }} className="flex flex-col min-h-screen">
        <Navbar />
        <div className="">{children}</div>
        <Spotlight />
      </body>
    </html>
  );
}
