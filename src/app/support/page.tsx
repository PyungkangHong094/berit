import { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "고객 지원 - Berit",
    description: "베리트 앱 사용 중 도움이 필요하신가요? 이메일로 문의해 주세요.",
};

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-6 py-20 max-w-3xl">
                <Link href="/" className="text-primary hover:underline text-sm mb-8 inline-block">
                    &larr; 홈으로 돌아가기
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Berit Support
                </h1>
                <p className="text-gray-600 text-lg mb-12">
                    베리트 앱 사용 중 문의가 필요하시면 아래로 연락해 주세요.
                </p>

                {/* Contact */}
                <section className="mb-12">
                    <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-1">이메일 문의</h3>
                                <a href="mailto:admin@chartq.app" className="text-primary hover:underline text-lg font-medium">
                                    admin@chartq.app
                                </a>
                                <p className="text-gray-500 text-sm mt-1">
                                    영업일 기준 1~2일 이내 답변드립니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to contact */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <MessageCircle size={24} className="text-primary" />
                        <h2 className="text-2xl font-bold text-foreground">문의 시 포함해 주세요</h2>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold mt-0.5">1.</span>
                                <span>사용 중인 <strong>앱 버전</strong> (예: v1.0.0)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold mt-0.5">2.</span>
                                <span><strong>기기 정보</strong> (예: iPhone 15, iOS 18)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold mt-0.5">3.</span>
                                <span><strong>문제 설명</strong> (가능하면 스크린샷 첨부)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold mt-0.5">4.</span>
                                <span>가입에 사용한 <strong>이메일 주소</strong></span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <HelpCircle size={24} className="text-primary" />
                        <h2 className="text-2xl font-bold text-foreground">자주 묻는 질문 (FAQ)</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                q: "앱이 정상적으로 작동하지 않아요.",
                                a: "앱을 최신 버전으로 업데이트한 후 다시 시도해 주세요. 문제가 지속되면 앱을 삭제 후 재설치하거나, 위 이메일로 문의해 주세요.",
                            },
                            {
                                q: "계정을 삭제하고 싶어요.",
                                a: "마이페이지 > 설정 > 계정 삭제에서 직접 삭제하거나, admin@chartq.app으로 요청하실 수 있습니다.",
                            },
                            {
                                q: "알림이 오지 않아요.",
                                a: "기기의 설정 > 알림에서 베리트 앱의 알림이 허용되어 있는지 확인해 주세요.",
                            },
                            {
                                q: "로그인이 안 돼요.",
                                a: "가입 시 사용한 이메일과 로그인 방식(Apple/Google)을 확인해 주세요. 문제가 지속되면 이메일로 문의해 주세요.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                                <h3 className="font-bold text-foreground mb-2">Q. {item.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* App Info */}
                <section className="border-t border-gray-200 pt-8">
                    <div className="text-sm text-gray-500 space-y-1">
                        <p><strong>앱명:</strong> 베리트 (Berit)</p>
                        <p><strong>개발사:</strong> ChartQ 차트큐</p>
                        <p><strong>이메일:</strong> admin@chartq.app</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
