import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const notoThai = Noto_Sans_Thai({ subsets: ["thai", "latin"] });

export const metadata: Metadata = {
  title: "Kookkook Company - บริการรับจัดทำเว็บไซต์",
  description: "Kookkook Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="black" lang="en">
      <body className={notoThai.className + ' scroll-smooth bg-base-200 min-w-screen max-w-screen min-h-screen'}>
        <Navbar/>
          <div className="w-screen min-h-screen">
            {children}
          </div>
        <Footer/>
      </body>
    </html>
  );
}
