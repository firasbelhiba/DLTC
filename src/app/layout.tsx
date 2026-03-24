import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DLTC — Distributed Ledger Technology Certification | Dar Blockchain Academy",
  description:
    "The DLTC certification program by Dar Blockchain Academy — 36 certifications across 5 tracks and 4 levels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
