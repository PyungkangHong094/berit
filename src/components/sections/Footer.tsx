import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-bold mb-2">Soul&apos;s Peace</h3>
                        <p className="text-sm">당신의 영혼을 위한 가장 깊은 안식처</p>
                    </div>

                    <div className="flex gap-8 text-sm">
                        <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
                        <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>

                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-8 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Soul&apos;s Peace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
