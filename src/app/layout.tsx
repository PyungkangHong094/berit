import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://berit.app'),
  title: "베리트(Berit) - 커플 기도 앱",
  description: "하나님과의 약속을 매일 기억하며, 사랑하는 사람과 함께 기도로 하루를 시작하세요. 매일의 묵상과 기도로 자라나는 믿음 나무.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "베리트(Berit) - 커플 기도 앱",
    description: "하나님과의 약속을 매일 기억하며, 사랑하는 사람과 함께 기도로 하루를 시작하세요.",
    url: 'https://berit.app',
    siteName: '베리트 Berit',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '베리트 - 커플 기도 앱',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "베리트(Berit) - 커플 기도 앱",
    description: "하나님과의 약속을 매일 기억하며, 사랑하는 사람과 함께 기도로 하루를 시작하세요.",
    images: ['/og-image.jpg'],
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
