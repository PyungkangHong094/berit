import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://berit.app'),
  title: "Berit - God's Promise",
  description: "Remember God's covenant and find peace in His promises.",
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Berit - God's Promise",
    description: "Remember God's covenant and find peace in His promises.",
    url: 'https://berit.app',
    siteName: 'Berit',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Berit - God\'s Promise',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
