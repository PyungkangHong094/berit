import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-bold mb-2">Berit</h3>
                        <p className="text-sm">하나님과의 영원한 약속을 기억합니다</p>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm">
                        <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
                        <Link href="/support" className="hover:text-white transition-colors">고객지원</Link>
                        <Link href="/delete-account" className="hover:text-white transition-colors">계정삭제</Link>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-8 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Berit. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
