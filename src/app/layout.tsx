import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studio Cah | Agencia creativa ✨",
  description: "Impulsá tu marca hacia nuevos horizontes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        defer
        src="https://digincreasemetrics.up.railway.app/script.js"
        data-website-id="b61df03b-3126-46db-acac-fbe4925d522f"
      ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
