---
name: berit-redesign
description: 베릿 웹사이트 리디자인 오케스트레이터 — biblessia 스타일 구조(랜딩 + 사용 가이드 + 업데이트 소식), 브랜드 폰트, 접근성 기준으로 사이트를 구축·개선하는 에이전트 팀을 조율. 웹사이트 리디자인/개편 요청, 가이드·업데이트 페이지 추가/수정, "다시 실행", "재실행", "랜딩만 다시", "가이드 페이지 업데이트", "업데이트 소식 추가", "디자인 수정", "폰트/색 바꿔줘" 등 베릿 웹사이트의 구조·디자인 작업 전반에 반드시 이 스킬을 사용할 것. 단순 오타 수정이나 파일 1개 미만의 자잘한 수정은 직접 처리해도 된다.
---

# 베릿 리디자인 오케스트레이터

베릿 웹사이트(Next.js, `src/app/`)를 biblessia 레퍼런스 구조로 구축·유지하는 워크플로우. 실행 모드는 **하이브리드**: 순차 파운데이션(서브) → 병렬 페이지 빌드(서브 팬아웃) → 통합 QA(서브). 페이지 빌더 간 실시간 통신이 구조적으로 불필요(담당 파일 분리, 계약은 파운데이션 보고서로 고정)하므로 팀 통신 대신 파일 기반 전달을 쓴다.

## 에이전트 구성

| 에이전트 | 정의 파일 | 사용 스킬 |
|----------|----------|----------|
| berit-design-foundation | `.claude/agents/berit-design-foundation.md` | berit-design-system, berit-page-patterns, berit-a11y |
| berit-page-builder ×3 | `.claude/agents/berit-page-builder.md` | berit-page-patterns, berit-design-system, berit-a11y |
| berit-a11y-qa | `.claude/agents/berit-a11y-qa.md` | berit-a11y |

모든 Agent 호출에 `model: "opus"`를 명시한다. 각 에이전트 prompt에는 해당 에이전트 정의 파일을 먼저 읽으라는 지시를 포함한다.

## Phase 0: 컨텍스트 확인

`_workspace/` 존재 여부로 실행 모드를 판별한다:
- **없음** → 초기 실행 (Phase 1부터 전체).
- **있음 + 부분 수정 요청** (예: "가이드 페이지만 다시") → 해당 에이전트만 재호출. 재호출 prompt에 사용자 피드백과 기존 보고서 경로를 전달한다. 이후 QA는 수정 범위만 재검증.
- **있음 + 새 방향의 전면 요청** → 기존 `_workspace/`를 `_workspace_prev/`로 이동 후 전체 실행.

## Phase 1: 파운데이션 (순차, 블로킹)

**실행 모드:** 서브 에이전트 1개, `run_in_background: false`.

berit-design-foundation을 호출한다. 산출물: 폰트, 토큰, SiteHeader/SiteFooter/ArticleListItem, `_workspace/01_foundation_report.md`.

보고서가 생성되었는지 확인 후 다음 Phase로 진행한다. 실패 시 1회 재시도, 재실패 시 사용자에게 보고하고 중단 (페이지 빌더가 공용 계약 없이 돌면 경계면 버그가 양산된다).

## Phase 2: 페이지 빌드 (병렬 팬아웃)

**실행 모드:** 서브 에이전트 3개 병렬 (`run_in_background: true`, 한 메시지에 동시 스폰).

| 인스턴스 | 담당 | 산출물 보고서 |
|----------|------|--------------|
| landing | `/` 랜딩 재구성 | `_workspace/02_landing_report.md` |
| guide | `/guide` 신설 | `_workspace/02_guide_report.md` |
| updates | `/updates` 신설 | `_workspace/02_updates_report.md` |

각 prompt에 담당 페이지, 파운데이션 보고서 경로, "공용 파일 수정 금지" 제약을 명시한다. 담당 파일이 서로 겹치지 않으므로 worktree 격리는 불필요하다.

한 빌더가 실패하면 1회 재시도, 재실패 시 해당 페이지 없이 진행하고 최종 보고에 누락을 명시한다.

## Phase 3: 통합 QA (순차)

**실행 모드:** 서브 에이전트 1개 (`general-purpose` 타입 — 검증 스크립트 실행 필요).

모든 빌더 완료 후 berit-a11y-qa를 호출한다. 빌드 → 경계면 교차 비교 → 접근성 감사 → 직접 수정. 산출물: `_workspace/03_qa_report.md`.

## 데이터 전달 프로토콜

- **파일 기반**: `_workspace/{phase}_{agent}_report.md`. 중간 산출물은 보존한다 (감사 추적 + 부분 재실행의 입력).
- **반환값 기반**: 각 에이전트의 최종 메시지는 요약만 — 상세는 보고서 파일.
- `_workspace/`는 git에 커밋하지 않는다 (.gitignore 확인).

## 에러 핸들링

- 에이전트 실패: 1회 재시도 → 재실패 시 해당 산출물 없이 진행, 최종 보고에 명시.
- 상충 발견(예: 빌더 보고서 간 다른 가정): 삭제하지 않고 QA가 양쪽 출처를 병기해 판정.
- 빌드 불능 상태로 종료 금지: QA가 빌드를 복구 못 하면 마지막 정상 커밋 대비 diff를 보고하고 사용자 판단을 요청한다.

## 완료 후

1. 사용자에게 결과 요약 (변경 파일, 새 라우트, 잔여 이슈).
2. 피드백 기회 제공: "결과에서 개선할 부분이 있나요?"
3. 피드백은 CLAUDE.md 변경 이력에 기록하고 해당 스킬/에이전트에 반영한다.

## 테스트 시나리오

**정상 흐름**: "biblessia 스타일로 리디자인해줘" → Phase 0(초기) → 파운데이션 → 3페이지 병렬 → QA → `npm run build` 성공 + `/`, `/guide`, `/updates` 렌더링.

**부분 재실행**: "업데이트 소식에 1.1.0 항목 추가해줘" → Phase 0(부분) → updates 빌더만 재호출(기존 보고서 전달) → QA가 /updates만 재검증.

**에러 흐름**: guide 빌더가 ArticleListItem 계약 불일치로 blocker 보고 → 오케스트레이터가 파운데이션 에이전트를 부분 재호출해 계약 수정 → guide 빌더 재실행 → QA.
