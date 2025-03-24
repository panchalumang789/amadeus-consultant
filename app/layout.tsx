import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
config.autoAddCss = false;

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import type { Metadata } from "next";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amadeus Consultant - Innovative Technology Solutions",
  description:
    "We provide innovative IT solutions to help businesses grow and succeed in the digital age.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
