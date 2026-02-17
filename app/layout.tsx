import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pallavi Kidz - Premier Preschool & Kindergarten",
  description:
    "Leading preschool chain offering quality early childhood education across multiple locations. Playgroup, Nursery, LKG, and UKG programs with modern facilities and experienced teachers.",
  keywords: [
    "preschool",
    "kindergarten",
    "early childhood education",
    "playgroup",
    "nursery",
    "LKG",
    "UKG",
    "Pallavi Kidz",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
