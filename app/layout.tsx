import type { Metadata } from "next";
import { urbanist } from "@/fonts/fonts";
import { Header } from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Mentor Academy",
  description: "Join the Mentor Academy to become a certified mentor and grow your coaching business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}