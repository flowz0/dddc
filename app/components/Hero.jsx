import bgImage from "@/app/assets/kansas-city-bg.jpg"
import dddcLogo from "@/app/assets/Duct-Daddy-01.png"
import Image from "next/image"
import Booking from "./Booking"

export default function Hero() {
	return (
		<main id="about" className="px-6 relative py-12 sm:py-16 flex items-center justify-center overflow-hidden">
			<Image
				src={bgImage}
				alt="Picture of Missouri, Kansas City"
				className="absolute z-[-1] w-full h-full object-cover filter brightness-[40%]"
				width={5184}
				height={3456}
				priority
			/>
			<header className="relative z-10 flex flex-col justify-center items-center text-center sm:max-w-2xl">
				<Image
					src={dddcLogo}
					alt="Duct Daddy Duct Cleaning logo"
					width={2000}
					height={2000}
					className="h-56 w-auto sm:h-64"
					priority
				/>
				<h1 className="mt-4 font-bold text-3xl/tight sm:text-5xl/tight text-[#F5F5F7]">Affordable and Dependable Duct Cleaning Services</h1>
				<p className="mt-2 px-1 sm:mt-4 leading-relaxed sm:leading-none text-[#F5F5F7]">Based in Kansas City and Surrounding Areas!</p>
				<div className="mt-6 sm:mt-8 ">
					<Booking />
				</div>
			</header>
		</main>
	)
}
