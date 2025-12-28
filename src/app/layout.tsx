import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";


const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${lato.variable} font-sans antialiased bg-white dark:bg-gray-900`}
      >
        <Navbar />
        {/* Main content with margin for sidebar */}
        <div className="lg:ml-80 pt-20 lg:pt-0">
          {children}
        </div>
        <div className="lg:ml-80">
          <Footer />
        </div>
      </body>
    </html>
  );
}
