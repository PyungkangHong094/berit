import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "개인정보처리방침 - Berit",
    description: "베리트 앱의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-6 py-20 max-w-3xl">
                <Link href="/" className="text-primary hover:underline text-sm mb-8 inline-block">
                    &larr; 홈으로 돌아가기
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    개인정보처리방침
                </h1>
                <p className="text-gray-500 text-sm mb-12">
                    시행일: 2026년 3월 22일 &nbsp;|&nbsp; 최종 수정: 2026년 3월 22일
                </p>

                <div className="prose-policy space-y-10 text-gray-700 leading-relaxed">
                    <section>
                        <p>
                            ChartQ 차트큐(이하 &quot;회사&quot;)는 베리트(Berit) 앱(이하 &quot;서비스&quot;) 이용자의
                            개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수합니다.
                            본 개인정보처리방침은 회사가 수집하는 개인정보의 항목, 이용 목적, 보관 기간 등을 안내합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">1. 수집하는 개인정보</h2>
                        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
                            <div>
                                <h3 className="font-bold text-foreground mb-1">필수 수집 항목</h3>
                                <ul className="list-disc ml-5 space-y-1 text-sm">
                                    <li>이메일 주소</li>
                                    <li>로그인 식별값 (Apple ID / Google 계정 식별자)</li>
                                    <li>닉네임</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground mb-1">자동 수집 항목</h3>
                                <ul className="list-disc ml-5 space-y-1 text-sm">
                                    <li>기기 정보 (OS 버전, 기기 모델)</li>
                                    <li>앱 사용 기록, 접속 로그</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">2. 개인정보의 이용 목적</h2>
                        <ul className="list-disc ml-5 space-y-2">
                            <li>회원 가입 및 본인 확인</li>
                            <li>서비스 제공 및 운영 (말씀 카드, 기도 기록, 공동체 기능 등)</li>
                            <li>고객 문의 응대 및 공지사항 전달</li>
                            <li>서비스 개선 및 통계 분석 (비식별 처리)</li>
                            <li>부정 이용 방지 및 보안</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">3. 개인정보의 보관 및 파기</h2>
                        <p className="mb-3">
                            회원 탈퇴 시 개인정보는 즉시 파기합니다. 단, 관련 법령에 따라 아래 정보는 일정 기간 보관됩니다.
                        </p>
                        <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                            <ul className="space-y-2 text-sm">
                                <li><strong>거래/정산 관련 기록:</strong> 5년 (전자상거래법)</li>
                                <li><strong>접속 로그:</strong> 3개월 (통신비밀보호법)</li>
                                <li><strong>고객 문의 기록:</strong> 3년 (전자상거래법)</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">4. 개인정보의 제3자 제공</h2>
                        <p>
                            회사는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다.
                            다만, 이용자의 동의가 있거나 법령에 의한 경우에는 예외로 합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">5. 개인정보의 위탁</h2>
                        <p className="mb-3">
                            회사는 서비스 운영을 위해 아래와 같이 개인정보 처리를 위탁할 수 있습니다.
                        </p>
                        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50">
                                        <th className="px-6 py-3 font-bold text-foreground">수탁 업체</th>
                                        <th className="px-6 py-3 font-bold text-foreground">위탁 업무</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="border-b border-gray-50">
                                        <td className="px-6 py-3">Google (Firebase)</td>
                                        <td className="px-6 py-3">서버 호스팅, 인증, 분석</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3">Apple</td>
                                        <td className="px-6 py-3">로그인 인증</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">6. 이용자의 권리</h2>
                        <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
                        <ul className="list-disc ml-5 space-y-2 mt-2">
                            <li>개인정보 열람, 정정, 삭제 요청</li>
                            <li>개인정보 처리 정지 요청</li>
                            <li>계정 삭제 요청 (<Link href="/delete-account" className="text-primary hover:underline">계정 삭제 안내 페이지</Link>)</li>
                        </ul>
                        <p className="mt-3">
                            위 요청은{" "}
                            <a href="mailto:admin@chartq.app" className="text-primary hover:underline">admin@chartq.app</a>
                            으로 연락해 주시면 지체 없이 처리합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">7. 쿠키 및 추적 기술</h2>
                        <p>
                            본 앱은 웹 쿠키를 사용하지 않습니다. 앱 분석을 위해 Firebase Analytics 등
                            비식별 통계 도구를 사용할 수 있으며, 기기 설정에서 추적을 제한할 수 있습니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">8. 개인정보 보호책임자</h2>
                        <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-sm space-y-1">
                            <p><strong>담당자:</strong> ChartQ 차트큐 개인정보 보호 담당</p>
                            <p><strong>이메일:</strong>{" "}
                                <a href="mailto:admin@chartq.app" className="text-primary hover:underline">admin@chartq.app</a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-3">9. 방침의 변경</h2>
                        <p>
                            본 개인정보처리방침은 법령 또는 서비스 변경에 따라 수정될 수 있으며,
                            변경 시 앱 내 공지 또는 이 페이지를 통해 안내합니다.
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
