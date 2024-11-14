import Image from "next/image";
import DDDCLogo from '@/app/assets/Duct-Daddy-01.png'
import { BsFacebook, BsTiktok, BsGoogle  } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="mt-20 px-2 bg-[#1A3A58]">
            <div className="mx-auto max-w-4xl pt-6">
                <Image
                    src={DDDCLogo}
                    alt="Duct Daddy Duct Cleaning logo"
                    className="h-auto w-48"
                />
                <div className="mt-8 mx-2 flex gap-x-6 text-[#F5F5F7]">
                    <BsFacebook className="text-2xl" />
                    <BsTiktok className="text-2xl" />
                    <BsGoogle className="text-2xl" />
                </div>
                <div className="mt-12 mx-2 grid grid-cols-1 gap-y-12 md:text-left text-[#F5F5F7] md:grid-cols-4">
                    <div>
                        <h3 className="font-bold text-lg">Company</h3>
                        <div className="mt-4 flex flex-col gap-y-2">
                            <span>Services</span>
                            <span>FAQ</span>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Phone</h3>
                        <div className="mt-4">
                            <span>+1 (816) 708-2608</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Email</h3>
                        <div className="mt-4">
                            <span>info@ductdaddykc.com</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Hours</h3>
                        <div className="mt-4">
                            <span>Mon-Fri, 8 AM - 4 PM</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Located</h3>
                        <div className="mt-4">
                            <span>Oak Grove, Missouri</span>
                        </div>
                    </div>
                </div>
                <hr className="mt-8 mx-2 border-0 h-px bg-[#F5F5F7]" />
                <p className="mt-8 mx-2 pb-8 text-sm text-center text-[#F5F5F7]">© 2024 Duct Daddy Duct Cleaning, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}
