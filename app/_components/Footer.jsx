import Image from "next/image";
import DDDCLogo from '@/app/assets/Duct-Daddy-01.png'
import { BsFacebook, BsTiktok, BsGoogle  } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="px-2 bg-[#1A3A58]">
            <div className="mx-auto max-w-4xl pt-8">
                <Image
                    src={DDDCLogo}
                    alt="Duct Daddy Duct Cleaning logo"
                    className="h-auto w-48"
                    width={3009}
					height={2983}
                />
                <div className="mt-6 mx-2 flex gap-x-6 text-[#F5F5F7]">
                    <BsFacebook className="text-2xl" />
                    <BsTiktok className="text-2xl" />
                    <BsGoogle className="text-2xl" />
                </div>
                <div className="mt-12 mx-2 grid grid-cols-1 gap-y-12 md:text-left text-[#F5F5F7] md:grid-cols-4">
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Company</h3>
                        <div className="mt-4 flex flex-col gap-y-2">
                            <span>Services</span>
                            <span>FAQ</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Phone</h3>
                        <div className="mt-4">
                            <span>+1 (816) 708-2608</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Email</h3>
                        <div className="mt-4">
                            <span>info@ductdaddykc.com</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Hours</h3>
                        <div className="mt-4">
                            <span>Mon-Fri, 8 AM - 4 PM</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg uppercase tracking-wide">Located</h3>
                        <div className="mt-4">
                            <span>Oak Grove, Missouri</span>
                        </div>
                    </div>
                </div>
                <hr className="mt-12 mx-2 border-0 h-px bg-[#F5F5F7]" />
                <p className="mt-8 mx-2 pb-8 text-sm text-center leading-loose text-[#F5F5F7]">© 2024 Duct Daddy Duct Cleaning | Powered by <Link href={"https://www.bflows.dev/"} target="_blank" className="underline decoration-solid">flowz0</Link></p>
            </div>
        </footer>
    )
}
