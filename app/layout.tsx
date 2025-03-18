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
  metadataBase: new URL("https://estateelite.vercel.app"),
  title: "EstateElite - Find Your Dream Home",
  description:
    "Explore luxury real estate listings with EstateElite. Find your perfect home today.",
  openGraph: {
    title: "EstateElite - Find Your Dream Home",
    description:
      "Explore luxury real estate listings with EstateElite. Find your perfect home today.",
    url: "https://estateelite.vercel.app",
    siteName: "EstateElite",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "EstateElite - Luxury Real Estate",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EstateElite - Find Your Dream Home",
    description:
      "Explore luxury real estate listings with EstateElite. Find your perfect home today.",
    images: ["/images/og-image.webp"],
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
