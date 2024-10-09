import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import "./globals.css";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Labonion",
  description:
    "Labonion is a teacher, a research assistant or a helper powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>{children}</body>
    </html>
  );
}
