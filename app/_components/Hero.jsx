import bgImage from "@/app/assets/kansas-city-bg.jpg"
import dddcLogo from "@/app/assets/Duct-Daddy-01.png"
import { Button } from "@nextui-org/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
	return (
		<main id="about" className="relative h-[72vh] flex items-center justify-center overflow-hidden px-2">
			<Image
				src={bgImage}
				alt="Picture of Missouri, Kansas City"
				className="absolute z-[-1] w-full h-full object-cover filter brightness-50"
				priority
			/>
			<header className="relative z-10 flex flex-col justify-center items-center text-center max-w-4xl">
				<Image
					src={dddcLogo}
					alt="Duct Daddy Duct Cleaning logo"
					width={1000}
					height={1000}
					className="h-48 w-auto sm:h-64"
				/>
				<h1 className="text-3xl font-bold text-[#F5F5F7] sm:text-5xl">Affordable and Dependable Duct Cleaning Services</h1>
				<p className="text-[#F5F5F7] mt-6">Based in Kansas City and Surrounding Areas</p>
				<Link href={"#contact-us"}>
					<Button className="mt-8 bg-[#3A73BA] text-[#F5F5F7]" color="primary">Get a Free Quote</Button>
				</Link>
			</header>
		</main>
	)
}
