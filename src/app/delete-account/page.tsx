import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "계정 및 데이터 삭제 안내 - Berit",
    description: "베리트 계정 삭제 방법 및 데이터 처리에 대한 안내입니다.",
};

export default function DeleteAccountPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="container mx-auto px-6 py-20 max-w-3xl">
                <Link href="/" className="text-primary hover:underline text-sm mb-8 inline-block">
                    &larr; 홈으로 돌아가기
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    베리트(Berit) 계정 및 데이터 삭제 안내
                </h1>
                <p className="text-gray-500 text-sm mb-12">
                    <strong>앱명:</strong> 베리트(Berit) &nbsp;|&nbsp; <strong>개발사:</strong> ChartQ 차트큐
                </p>

                <p className="text-gray-700 mb-10 leading-relaxed">
                    베리트 계정 삭제를 원하시는 경우 아래 방법으로 요청하실 수 있습니다.
                </p>

                {/* 1. 계정 삭제 요청 방법 */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-foreground mb-4">1. 계정 삭제 요청 방법</h2>
                    <div className="bg-white rounded-2xl border border-gray-100 p-8">
                        <ol className="space-y-4 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold shrink-0">1.</span>
                                <span>베리트 가입에 사용한 이메일 주소를 준비해 주세요.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold shrink-0">2.</span>
                                <div>
                                    <span>아래 방법 중 하나로 계정 삭제를 요청해 주세요.</span>
                                    <ul className="mt-3 space-y-2 ml-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400">&#8226;</span>
                                            <span><strong>앱 내 요청:</strong> 마이페이지 &gt; 설정 &gt; 계정 삭제</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400">&#8226;</span>
                                            <span>
                                                <strong>이메일 요청:</strong>{" "}
                                                <a href="mailto:admin@chartq.app" className="text-primary hover:underline">admin@chartq.app</a>
                                                으로 <strong>&quot;베리트 계정 삭제 요청&quot;</strong> 제목으로 발송
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold shrink-0">3.</span>
                                <span>본인 확인이 완료되면 계정 삭제 절차가 진행됩니다.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold shrink-0">4.</span>
                                <span>유료 구독이 있는 경우, 계정 삭제 전에 <strong>App Store / Google Play 정기결제 해지</strong>가 필요할 수 있습니다.</span>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* 2. 삭제되는 데이터 */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-foreground mb-4">2. 삭제되는 데이터</h2>
                    <p className="text-gray-600 mb-4">계정 삭제가 완료되면 다음 정보가 삭제됩니다.</p>
                    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">&#10005;</span>
                                <span><strong>계정 정보:</strong> 이메일, 닉네임, 로그인 식별값</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">&#10005;</span>
                                <span><strong>사용자 작성 콘텐츠:</strong> 기도 기록, 묵상 노트, 즐겨찾기</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">&#10005;</span>
                                <span><strong>앱 설정 정보:</strong> 알림 설정, 개인화 설정</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">&#10005;</span>
                                <span><strong>서비스 이용 정보:</strong> 계정과 직접 연결된 이용 기록</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 3. 보관되는 데이터 */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-foreground mb-4">3. 보관되는 데이터 및 보관 기간</h2>
                    <p className="text-gray-600 mb-4">
                        다음 정보는 관련 법령, 보안, 부정 사용 방지, 분쟁 대응 등의 사유로 일정 기간 보관될 수 있습니다.
                    </p>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50">
                                    <th className="px-6 py-4 text-sm font-bold text-foreground">항목</th>
                                    <th className="px-6 py-4 text-sm font-bold text-foreground">보관 기간</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm">
                                <tr className="border-b border-gray-50">
                                    <td className="px-6 py-4">거래/정산 관련 기록</td>
                                    <td className="px-6 py-4">5년</td>
                                </tr>
                                <tr className="border-b border-gray-50">
                                    <td className="px-6 py-4">보안 및 부정 사용 방지 로그</td>
                                    <td className="px-6 py-4">3개월</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">고객 문의 및 분쟁 대응 기록</td>
                                    <td className="px-6 py-4">3년</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 text-sm mt-3">
                        보관 기간이 종료되면 해당 데이터는 지체 없이 삭제됩니다.
                    </p>
                </section>

                {/* 4. 처리 기간 */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-foreground mb-4">4. 처리 기간</h2>
                    <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6">
                        <p className="text-gray-700">
                            계정 삭제 요청은 접수 후 <strong className="text-primary">7일 이내</strong> 처리됩니다.
                        </p>
                    </div>
                </section>

                {/* 5. 문의처 */}
                <section className="border-t border-gray-200 pt-8">
                    <h2 className="text-xl font-bold text-foreground mb-4">5. 문의처</h2>
                    <p className="text-gray-700">
                        이메일:{" "}
                        <a href="mailto:admin@chartq.app" className="text-primary hover:underline font-medium">
                            admin@chartq.app
                        </a>
                    </p>
                </section>
            </div>
        </main>
    );
}
