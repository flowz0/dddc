import { FaPhone } from "react-icons/fa6";
import Booking from "./Booking";
import Link from "next/link";

export default function MobileCTAs() {
  return (
    <div className="fixed bottom-0 z-50 grid grid-cols-2 w-full text-[#F5F5F7] sm:hidden font-semibold">
      <Link href="tel:+18167082608" className="bg-[#FF3B3F] py-4 flex items-center justify-center gap-x-2.5 text-lg hover:bg-[hsl(359,70%,52%)]">
        <FaPhone />
        Call Us
      </Link>
      <div className="bg-[#3A73BA] py-4 flex justify-center hover:bg-[hsl(213,52%,38%)]">
        <Booking />
      </div>
    </div>
  )
}