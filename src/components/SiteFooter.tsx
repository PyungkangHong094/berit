import Image from "next/image";
import Link from "next/link";

/**
 * 핵심 기능들 컬럼: 랜딩 섹션 앵커.
 * 앵커 id(#features 등)는 랜딩 빌더가 각 섹션에 부여하는 id와 일치시켜야 한다.
 * 랜딩 구조가 확정되면 아래 href를 실제 섹션 id로 맞춘다.
 */
const FEATURE_LINKS = [
  { href: "/#features", label: "함께 기도하기" },
  { href: "/#features", label: "말씀 묵상" },
  { href: "/#features", label: "믿음 나무" },
];

const LEARN_LINKS = [
  { href: "/guide", label: "사용 가이드" },
  { href: "/updates", label: "업데이트 소식" },
];

const SUPPORT_LINKS = [
  { href: "/support", label: "연락하기" },
  { href: "/privacy", label: "개인정보 처리방침" },
  { href: "/terms", label: "이용약관" },
  { href: "/delete-account", label: "계정 삭제" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-bold text-ink">{title}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link
              href={link.href}
              className="rounded-sm text-sm text-foreground transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 rounded-md">
              <Image
                src="/berit_logo.png"
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-lg font-extrabold text-ink">베리트</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground">
              &lsquo;언약&rsquo;을 뜻하는 히브리어, 베리트. 사랑하는 사람과 함께
              기도로 하루를 시작하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <FooterColumn title="핵심 기능들" links={FEATURE_LINKS} />
            <FooterColumn title="더 알아보기" links={LEARN_LINKS} />
            <FooterColumn title="고객지원" links={SUPPORT_LINKS} />
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-foreground">
            &copy; {new Date().getFullYear()} 베리트(Berit). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
