import Image from "next/image";
import Link from "next/link";
import { MotifThumb } from "@/components/motifs";

export interface ArticleListItemProps {
  /** 아티클 제목 (h2로 렌더 — 목록 페이지 h1 바로 아래 레벨) */
  title: string;
  /** 1~2줄 설명 */
  description: string;
  /** 메타 라인 — "읽는 시간 5분" / "1.0.6 버전 이상" 등 */
  meta: string;
  /** 썸네일 이미지 경로. 없으면 브랜드 모티프 썸네일로 폴백 */
  imageSrc?: string;
  /** 썸네일 대체 텍스트. imageSrc가 있으면 필수적으로 의미를 담을 것 */
  imageAlt?: string;
  /** true면 NEW 뱃지 노출 */
  isNew?: boolean;
  /** 있으면 행 전체를 하나의 Link로 감싼다 (중첩 링크 금지) */
  href?: string;
  /** imageSrc가 없을 때 렌더할 브랜드 모티프 썸네일 키 (motifs.tsx) */
  motif?: string;
}

function Thumbnail({
  imageSrc,
  imageAlt,
  motif,
}: Pick<ArticleListItemProps, "imageSrc" | "imageAlt" | "motif">) {
  if (imageSrc) {
    return (
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-surface ring-1 ring-inset ring-line sm:h-28 sm:w-28">
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>
    );
  }
  return <MotifThumb motif={motif ?? "prayer"} />;
}

function ItemBody({
  title,
  description,
  meta,
  isNew,
}: Pick<ArticleListItemProps, "title" | "description" | "meta" | "isNew">) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2">
      {isNew && (
        <span className="w-fit rounded-md bg-accent/20 px-2 py-0.5 text-xs font-bold tracking-wide text-ink">
          NEW
        </span>
      )}
      <h2 className="text-lg font-bold leading-snug text-ink break-keep transition-colors group-hover:text-primary sm:text-xl">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-foreground break-keep line-clamp-2">
        {description}
      </p>
      <p className="mt-0.5 text-sm text-muted">{meta}</p>
    </div>
  );
}

export default function ArticleListItem({
  title,
  description,
  meta,
  imageSrc,
  imageAlt,
  isNew,
  href,
  motif,
}: ArticleListItemProps) {
  const inner = (
    <>
      <ItemBody
        title={title}
        description={description}
        meta={meta}
        isNew={isNew}
      />
      <Thumbnail imageSrc={imageSrc} imageAlt={imageAlt} motif={motif} />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group flex items-start gap-4 border-b border-line py-7 transition-colors hover:bg-surface/50 sm:gap-6"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="group flex items-start gap-4 border-b border-line py-7 sm:gap-6">
      {inner}
    </div>
  );
}
