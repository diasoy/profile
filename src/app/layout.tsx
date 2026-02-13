import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dias Norman's Website",
  description: "Personal website and digital garden of Dias Norman, software engineer and open-source creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} font-sans antialiased text-foreground`}
      >
        <Navbar />
        {/* Main content with margin for sidebar */}
        <div className="pt-20 lg:ml-[21.5rem] lg:pt-0">
          {children}
        </div>
        <div className="lg:ml-[21.5rem]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
