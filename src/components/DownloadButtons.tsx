"use client";

import { useEffect, useState } from "react";

const APPLE_STORE_URL = "https://apps.apple.com/kr/app/berit/id6760607995";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.berit.app&pcampaignid=web_share";

type Platform = "ios" | "android" | "other";

function AppleIcon({ size = 26 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01M12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
    );
}

function PlayIcon({ size = 26 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#34A853" d="M16.81 10.43L4.84 1.62c-.21-.16-.5-.13-.69.07-.18.18-.22.43-.13.65l8.27 8.83 4.52-.74z" />
            <path fill="#FBBC04" d="M19.96 10.18c-.16-.27-.41-.48-.71-.62L16.81 10.43l-2.07 2.07 2.07 2.07 2.44-1.13c.3-.14.55-.35.71-.62.16-.27.24-.58.24-.92s-.08-.65-.24-.92" />
            <path fill="#EA4335" d="M4.02 22.31c.18.18.42.27.65.27.16 0 .31-.05.47-.13l11.67-7.85-4.52-.74-8.27 8.45z" />
            <path fill="#4285F4" d="M3.86 1.69c-.15.18-.23.41-.23.66v19.31c0 .25.08.48.23.66l8.4-9.83-8.4-8.8z" />
        </svg>
    );
}

type Theme = "light" | "dark";

function getButtonClass(theme: Theme) {
    return theme === "dark"
        ? "bg-white text-[#1A1A1A] hover:bg-white/95"
        : "bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90";
}

function AppleButton({ theme }: { theme: Theme }) {
    return (
        <a
            href={APPLE_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${getButtonClass(theme)} flex items-center gap-3 px-6 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg min-w-[180px]`}
            aria-label="Download Berit on the App Store"
        >
            <AppleIcon size={28} />
            <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-wider opacity-70">Download on the</div>
                <div className="text-base font-semibold">App Store</div>
            </div>
        </a>
    );
}

function GoogleButton({ theme }: { theme: Theme }) {
    return (
        <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${getButtonClass(theme)} flex items-center gap-3 px-6 py-3.5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg min-w-[180px]`}
            aria-label="Get Berit on Google Play"
        >
            <PlayIcon size={26} />
            <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-wider opacity-70">GET IT ON</div>
                <div className="text-base font-semibold">Google Play</div>
            </div>
        </a>
    );
}

export default function DownloadButtons({ theme = "light" }: { theme?: Theme }) {
    const [platform, setPlatform] = useState<Platform>("other");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const ua = window.navigator.userAgent;
        if (/iPhone|iPad|iPod/i.test(ua)) {
            setPlatform("ios");
        } else if (/Android/i.test(ua)) {
            setPlatform("android");
        } else {
            setPlatform("other");
        }
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex flex-wrap items-center justify-center gap-3">
                <AppleButton theme={theme} />
                <GoogleButton theme={theme} />
            </div>
        );
    }

    if (platform === "ios") {
        return (
            <div className="flex justify-center">
                <AppleButton theme={theme} />
            </div>
        );
    }

    if (platform === "android") {
        return (
            <div className="flex justify-center">
                <GoogleButton theme={theme} />
            </div>
        );
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            <AppleButton theme={theme} />
            <GoogleButton theme={theme} />
        </div>
    );
}
