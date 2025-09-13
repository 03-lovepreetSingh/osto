import type { Metadata } from "next";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osto - Simplifying Cybersecurity for SMEs",
  description:
    "Comprehensive, affordable, and easy-to-use cybersecurity solutions tailored for small and medium-sized enterprises.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png", // Optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
