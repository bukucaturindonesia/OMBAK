import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMBAK by Om Bakri | Jaringan Kemitraan Referral",
  description:
    "OMBAK membantu Anda memanfaatkan relasi menjadi peluang penghasilan tambahan melalui jaringan referral bersama Om Bakri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
