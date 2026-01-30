import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import { IBM_Plex_Serif } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});
const IBM = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "ABC Sweet Shop",
  description: "ABC famous Sweet Shop ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${IBM.variable} ${greatVibes.variable} ${geistMono.variable} {cormorant.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
