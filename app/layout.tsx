import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./_components/common/Footer";
import Header from "./_components/common/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EstateElite - Find Your Perfect Property",
  description:
    "Browse premium properties for sale and rent. Discover your dream home with ease.",
  keywords: [
    "real estate",
    "buy property",
    "rent property",
    "dream home",
    "property listings",
  ],
  authors: [
    { name: "devdashk66", url: "https://www.linkedin.com/in/devdashk66/" },
  ],
  openGraph: {
    title: "EstateElite - Find Your Perfect Property",
    description:
      "Browse premium properties for sale and rent. Discover your dream home with ease.",
    url: "/images/og-image.webp",
    siteName: "EstateElite",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
