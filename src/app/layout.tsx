import type { Metadata } from "next";
import { Outfit, Ovo, Salsa } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

const salsa = Salsa({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Blessing Ubiomor | Frontend Developer",
  description: "Blessing's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} ${salsa.className} overflow-x-hidden leading-8 antialiased dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
