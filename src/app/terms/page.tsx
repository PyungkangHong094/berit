import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "이용약관 - Berit",
    description: "베리트 앱의 이용약관입니다.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-6 py-20 max-w-3xl">
                <Link href="/" className="text-primary hover:underline text-sm mb-8 inline-block">
                    &larr; 홈으로 돌아가기
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    이용약관
                </h1>
                <p className="text-gray-500 text-sm mb-12">
                    시행일: 2026년 3월 22일 &nbsp;|&nbsp; 최종 수정: 2026년 3월 22일
                </p>

                <div className="space-y-10 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제1조 (목적)</h2>
                        <p>
                            본 약관은 ChartQ 차트큐(이하 &quot;회사&quot;)가 제공하는 베리트(Berit) 앱 서비스(이하 &quot;서비스&quot;)의
                            이용 조건 및 절차, 회사와 이용자의 권리·의무·책임사항을 규정함을 목적으로 합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제2조 (정의)</h2>
                        <ol className="list-decimal ml-5 space-y-2">
                            <li>&quot;서비스&quot;란 회사가 제공하는 베리트 앱 및 관련 부가 서비스를 말합니다.</li>
                            <li>&quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 자를 말합니다.</li>
                            <li>&quot;콘텐츠&quot;란 서비스 내에서 이용자가 작성한 기도 기록, 묵상 노트 등의 정보를 말합니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제3조 (약관의 효력 및 변경)</h2>
                        <ol className="list-decimal ml-5 space-y-2">
                            <li>본 약관은 서비스 화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력이 발생합니다.</li>
                            <li>회사는 관련 법령에 위배되지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 적용일 7일 전에 공지합니다.</li>
                            <li>변경된 약관에 동의하지 않는 이용자는 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제4조 (서비스의 제공)</h2>
                        <p className="mb-3">회사는 다음과 같은 서비스를 제공합니다.</p>
                        <ul className="list-disc ml-5 space-y-2">
                            <li>매일의 말씀 카드 제공</li>
                            <li>기도 기록 및 묵상 노트 기능</li>
                            <li>믿음의 공동체 (기도 나눔) 기능</li>
                            <li>기타 회사가 추가 개발하는 서비스</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제5조 (회원가입 및 계정)</h2>
                        <ol className="list-decimal ml-5 space-y-2">
                            <li>이용자는 Apple ID 또는 Google 계정을 통해 회원가입할 수 있습니다.</li>
                            <li>이용자는 본인의 계정 정보를 정확하게 유지할 책임이 있습니다.</li>
                            <li>계정은 본인만 사용할 수 있으며, 타인에게 양도하거나 대여할 수 없습니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제6조 (이용자의 의무)</h2>
                        <p className="mb-3">이용자는 다음 행위를 해서는 안 됩니다.</p>
                        <ul className="list-disc ml-5 space-y-2">
                            <li>타인의 정보를 도용하는 행위</li>
                            <li>서비스를 이용하여 법령 또는 공서양속에 반하는 행위</li>
                            <li>서비스의 운영을 방해하는 행위</li>
                            <li>다른 이용자에게 불쾌감을 주거나 피해를 주는 행위</li>
                            <li>서비스를 상업적 목적으로 무단 이용하는 행위</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제7조 (콘텐츠의 관리)</h2>
                        <ol className="list-decimal ml-5 space-y-2">
                            <li>이용자가 작성한 콘텐츠의 저작권은 이용자에게 귀속됩니다.</li>
                            <li>회사는 이용자가 작성한 콘텐츠가 관련 법령에 위반되거나 다른 이용자에게 피해를 줄 경우 사전 통보 없이 삭제할 수 있습니다.</li>
                            <li>계정 삭제 시 이용자의 콘텐츠는 함께 삭제되며, 복구가 불가능합니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제8조 (서비스 중단)</h2>
                        <ol className="list-decimal ml-5 space-y-2">
                            <li>회사는 시스템 점검, 장비 교체 등 부득이한 사유가 있을 경우 서비스를 일시적으로 중단할 수 있습니다.</li>
                            <li>천재지변, 비상사태 등 불가항력으로 인한 서비스 중단에 대해 회사는 책임을 지지 않습니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제9조 (회원 탈퇴 및 계정 삭제)</h2>
                        <ol className="list-decimal ml-5 space-y-2">
                            <li>이용자는 언제든지 서비스 내 설정 또는 이메일 요청을 통해 탈퇴할 수 있습니다.</li>
                            <li>
                                탈퇴 시 개인정보 및 콘텐츠 처리에 관한 사항은{" "}
                                <Link href="/delete-account" className="text-primary hover:underline">계정 삭제 안내</Link> 및{" "}
                                <Link href="/privacy" className="text-primary hover:underline">개인정보처리방침</Link>을 따릅니다.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제10조 (면책 조항)</h2>
                        <ol className="list-decimal ml-5 space-y-2">
                            <li>회사는 무료로 제공하는 서비스에 대해서는 관련 법령에 특별한 규정이 없는 한 책임을 지지 않습니다.</li>
                            <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
                            <li>회사는 이용자가 서비스를 통해 기대하는 영적, 심리적 효과를 보장하지 않습니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제11조 (분쟁 해결)</h2>
                        <ol className="list-decimal ml-5 space-y-2">
                            <li>서비스 이용과 관련한 분쟁은 회사와 이용자 간 협의를 통해 해결합니다.</li>
                            <li>협의가 이루어지지 않을 경우, 관할 법원은 회사 소재지를 관할하는 법원으로 합니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">제12조 (문의)</h2>
                        <p>
                            본 약관에 관한 문의는{" "}
                            <a href="mailto:admin@chartq.app" className="text-primary hover:underline">admin@chartq.app</a>
                            으로 연락해 주시기 바랍니다.
                        </p>
                    </section>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ChartQ 차트큐. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}
