"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/guide", label: "사용 가이드" },
  { href: "/updates", label: "업데이트 소식" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <nav
        aria-label="주요 메뉴"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md"
          aria-label="베리트 홈"
        >
          <Image
            src="/berit_logo.png"
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-lg font-extrabold text-ink sm:text-xl">베리트</span>
        </Link>

        <ul className="flex items-center gap-4 sm:gap-8">
          {NAV_LINKS.map((link) => {
            const isCurrent =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`rounded-md text-sm font-bold transition-colors sm:text-base ${
                    isCurrent
                      ? "text-ink underline decoration-accent decoration-2 underline-offset-8"
                      : "text-foreground hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
