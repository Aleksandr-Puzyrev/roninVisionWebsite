import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { geistMono, geistSans, inter, manrope, unbounded } from "@/consts/font-family.consts";

export const metadata: Metadata = {
  title: "Ronin Vision",
  description: "Ronin Vision monitor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
