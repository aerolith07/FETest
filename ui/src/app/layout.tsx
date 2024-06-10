import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arqiva Contributions",
  description: "Created by Rahul Bageja",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={albertSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
