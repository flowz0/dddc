import Image from "next/image";
import DDDCLogo from '@/app/assets/Duct-Daddy-01.png'
import { FaGoogle, FaFacebookF, FaTiktok } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="px-2 pt-2 bg-[#1A3A58]">
            <div className="mx-auto max-w-4xl">
                <Image
                    src={DDDCLogo}
                    alt="Duct Daddy Duct Cleaning logo"
                    className="h-auto w-48"
                    width={3009}
                    height={2983}
                />
                <div className="mt-2 mx-2 flex gap-x-2 text-[#F5F5F7]">
                    <Link href={"https://maps.app.goo.gl/hTBDS1CVNxKTGFUP9?g_st=ic"} target="_blank">
                        <FaGoogle className="text-xl hover:text-[hsl(213,68%,68%)] active:text-[hsl(213,58%,58%)]" />
                    </Link>
                    <Link href={"https://www.facebook.com/ductdaddykc"} target="_blank">
                        <FaFacebookF className="text-xl hover:text-[hsl(213,68%,68%)] active:text-[hsl(213,58%,58%)]" />
                    </Link>
                    <Link href={"https://www.tiktok.com/@ductdaddykc"} target="_blank">
                        <FaTiktok className="text-xl hover:text-[hsl(213,68%,68%)] active:text-[hsl(213,58%,58%)]" />
                    </Link>
                </div>
                <div className="mt-6 mx-2 grid grid-cols-1 gap-y-6 md:text-left text-[#F5F5F7] md:grid-cols-4">
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Company</h3>
                        <div className="mt-2 flex flex-col gap-y-2.5">
                            <Link href={'#services'} className="hover:text-[hsl(213,68%,68%)] active:text-[hsl(213,58%,58%)]">
                                <span>Services</span>
                            </Link>
                            <Link href={'#faq'} className="hover:text-[hsl(213,68%,68%)] active:text-[hsl(213,58%,58%)]">
                                <span>FAQ</span>
                            </Link>
                            <Link href={'#contact'} className="hover:text-[hsl(213,68%,68%)] active:text-[hsl(213,58%,58%)]">
                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Phone</h3>
                        <div className="mt-2">
                            <span>+1 (816) 708-2608</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Email</h3>
                        <div className="mt-2">
                            <span>info@ductdaddykc.com</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Hours</h3>
                        <div className="mt-2">
                            <span>Mon-Fri, 8 AM - 4 PM</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Located</h3>
                        <div className="mt-2">
                            <span>Oak Grove, Missouri</span>
                        </div>
                    </div>
                </div>
                <hr className="mt-6 mx-2 border-0 h-px bg-[#F5F5F7]" />
                <p className="py-6 mx-2 text-sm text-center leading-loose text-[#F5F5F7]">© 2024 Duct Daddy Duct Cleaning | Powered by <Link href={"https://www.bflows.dev/"} target="_blank" className="font-semibold underline decoration-solid hover:text-orange-500">flowz0</Link></p>
            </div>
        </footer>
    )
}
