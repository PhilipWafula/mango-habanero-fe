import type {Metadata} from "next";
import "./globals.css";
import {baiJamjuree} from "./ui/fonts";


export const metadata: Metadata = {
  applicationName: "Mango Habanero",
  authors: [{ name: "Philip Wafula", url: "https://mango-habanero.dev/"}],
  generator: "Next.js",
  title: "Mango Habanero",
  description: "A portfolio app for Philip Wafula.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baiJamjuree.className} anti-aliased bg-black`}>{children}</body>
    </html>
  );
}
