import "./globals.css";
import type { Metadata } from "next";
import { Questrial } from "next/font/google";

const inter = Questrial({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "A.S Watson Group",
  description: "Great App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
