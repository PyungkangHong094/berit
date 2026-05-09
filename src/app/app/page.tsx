import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { TreePine } from "lucide-react";
import DownloadButtons from "@/components/DownloadButtons";
import { detectPlatform } from "@/lib/detect-platform";

export const dynamic = "force-dynamic";

const APPLE_STORE_URL = "https://apps.apple.com/kr/app/berit/id6760607995";
const GOOGLE_PLAY_URL =
    "https://play.google.com/store/apps/details?id=com.berit.app&pcampaignid=web_share";

export const metadata: Metadata = {
    title: "베리트 앱 다운로드 - Berit",
    description:
        "지금 바로 베리트를 다운로드하세요. 매일의 기도와 묵상으로 자라나는 믿음 나무. iOS · Android 모두 지원합니다.",
    alternates: { canonical: "https://berit.life/app" },
    openGraph: {
        title: "베리트(Berit) 앱 다운로드",
        description:
            "하나님과의 약속을 매일 기억하며, 사랑하는 사람과 함께 기도로 하루를 시작하세요.",
        url: "https://berit.life/app",
        siteName: "베리트 Berit",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "베리트 - 커플 기도 앱",
            },
        ],
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "베리트(Berit) 앱 다운로드",
        description:
            "하나님과의 약속을 매일 기억하며, 사랑하는 사람과 함께 기도로 하루를 시작하세요.",
        images: ["/og-image.jpg"],
    },
    other: {
        "apple-itunes-app": "app-id=6760607995",
    },
};

export default async function AppPage() {
    const headerList = await headers();
    const userAgent = headerList.get("user-agent");
    const platform = detectPlatform(userAgent);

    if (platform === "ios") redirect(APPLE_STORE_URL);
    if (platform === "android") redirect(GOOGLE_PLAY_URL);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-background">
            <div className="w-20 h-20 bg-growth/20 rounded-full flex items-center justify-center mb-6">
                <TreePine size={40} className="text-growth" />
            </div>

            <Image
                src="/berit_logo.png"
                alt="베리트"
                width={64}
                height={64}
                className="mb-4"
                priority
            />

            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
                베리트 앱 다운로드
            </h1>

            <p className="text-foreground/70 text-center max-w-md mb-10 leading-relaxed">
                하나님과의 약속, 매일의 기도와 묵상.<br />
                사용 중인 기기에 맞는 스토어에서 다운로드하세요.
            </p>

            <DownloadButtons theme="light" />

            <Link
                href="/"
                className="mt-12 text-sm text-foreground/50 hover:text-foreground/80 transition-colors"
            >
                ← 베리트 홈으로
            </Link>
        </main>
    );
}
