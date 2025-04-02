import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="py-48 px-6">
      <div className="max-w-4xl flex flex-col items-center justify-center mx-auto">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#333333] sm:text-5xl">Page not found.</h2>
        <p className="max-w-xl text-center mt-3.5 font-normal tracking-normal leading-relaxed text-[rgba(51,51,51,0.85)]">Head back to the homepage.</p>
        <Link href="/" className="mt-6 font-semibold bg-[#3A73BA] text-[#F5F5F7] py-2.5 px-5 rounded-xl hover:bg-[hsl(213,52%,38%)]">
          Return to homepage
        </Link>
      </div>
    </div>
  )
}