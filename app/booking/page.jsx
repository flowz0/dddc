"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaCalendarDays } from "react-icons/fa6";



export default function Booking() {
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://online-booking.housecallpro.com/script.js?token=127343b956e24e13a52da46f4500936b&orgName=Duct-Daddy";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (pathname === "/booking" && typeof HCPWidget !== "undefined") {
        HCPWidget.openModal();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  });

  const handleClick = () => {
    if (typeof HCPWidget !== "undefined") {
      HCPWidget.openModal();
    }
  };

  return (
    <div className="py-48 px-6">
      <div className="max-w-4xl flex flex-col items-center justify-center mx-auto">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#333333] sm:text-5xl">Online Booking</h2>
        <p className="max-w-xl text-center mt-3.5 font-normal tracking-normal leading-relaxed text-[rgba(51,51,51,0.85)]">
          Schedule an appointment with Duct Daddy Duct Cleaning.
        </p>
        <button
          data-token="127343b956e24e13a52da46f4500936b"
          data-orgname="Duct-Daddy"
          onClick={handleClick}
          className="flex items-center gap-x-2.5 mt-6 bg-[#3a73ba] text-[#f5f5f7] py-3.5 px-5 rounded-xl font-semibold hover:bg-[hsl(213,52%,38%)]"
        >
          <FaCalendarDays />
          Book Appointment
        </button>
      </div>
    </div>
  )
}