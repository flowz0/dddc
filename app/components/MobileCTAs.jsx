import { FaPhone } from "react-icons/fa6";
import Booking from "./Booking";
import Link from "next/link";

export default function MobileCTAs() {
  return (
    <div className="px-6 fixed bottom-6 z-50 flex items-start justify-start gap-x-2.5 w-full text-[#F5F5F7] sm:hidden">
      <Link href="tel:+18167082608" className="shadow-xl bg-[#FF3B3F] font-semibold py-2.5 px-5 rounded-xl flex items-center justify-center gap-x-2.5 w-fit hover:bg-[hsl(359,70%,52%)]">
        <FaPhone />
        Call Us
      </Link>
      <div className="shadow-xl flex justify-center items-center">
        <Booking />
      </div>
    </div>
  )
}