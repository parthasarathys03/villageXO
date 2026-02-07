import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "VillageXO - Where Farming is Lived",
  description: "Authentic Tamil village experience. Participate in real farm work, cook traditional meals, and learn from farmers who've lived this life for generations.",
  keywords: "Tamil village experience, authentic farming, cultural immersion, village tourism, traditional cooking, rural India, Thiruvarur, agricultural experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
