export type Platform = "ios" | "android" | "bot" | "desktop";

const BOT_PATTERN =
    /facebookexternalhit|Twitterbot|Slackbot|KAKAOTALK|kakaolink|LinkedInBot|WhatsApp|TelegramBot|Discordbot|Googlebot|bingbot|Applebot|Pinterestbot|redditbot|YandexBot|DuckDuckBot|Baiduspider|embedly|Iframely|SkypeUriPreview|Naver|Daum/i;

export function detectPlatform(userAgent: string | null | undefined): Platform {
    if (!userAgent) return "desktop";

    if (BOT_PATTERN.test(userAgent)) return "bot";
    if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios";
    if (/Android/i.test(userAgent)) return "android";

    return "desktop";
}
