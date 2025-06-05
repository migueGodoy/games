import type { Metadata } from "next";
import { Playwrite_ES } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "Games for My Kids",
  description: "A collection of fun and educational games for children made by a dad",
  icons: {
    icon: '/favicon.svg',
  },
};

const playwrite = Playwrite_ES({
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={playwrite.className}>
      <body>
        <div className=" flex flex-row h-screen">
          <Navbar />
          <main className="w-[100%]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
