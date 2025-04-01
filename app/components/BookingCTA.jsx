import Booking from "./Booking";

export default function BookingCTA() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-3xl mx-auto bg-[#ffffff] py-8 px-6 sm:py-12 sm:px-14 flex flex-col items-center justify-center rounded-xl shadow-md">
        <div className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-[#333333] sm:text-4xl">Book Perfection Today</h3>
          <p className="mt-3.5 font-normal tracking-normal leading-relaxed text-[rgba(51,51,51,0.85)]">A clean, comfortable home shouldn&apos;t be a gamble. At Duct Daddy, we make sure it never is. We show up, do it right, and leave your air fresher than ever.</p>
        </div>
        <div className="mt-6 bg-[#3A73BA] text-[#F5F5F7] py-3 px-6 rounded-lg flex justify-center hover:bg-[hsl(213,52%,38%)] w-fit">
          <Booking />
        </div>
      </div>
    </div>
  )
}