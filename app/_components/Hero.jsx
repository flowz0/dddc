import bgImage from "@/app/assets/kansas-city-bg.jpg"
import dddcLogo from "@/app/assets/Duct-Daddy-01.png"
import { Button } from "@nextui-org/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
	return (
		<main id="about" className="px-2 relative h-[66vh] sm:h-[76vh] flex items-center justify-center overflow-hidden">
			<Image
				src={bgImage}
				alt="Picture of Missouri, Kansas City"
				className="absolute z-[-1] w-full h-full object-cover filter brightness-50"
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
					className="h-48 w-auto sm:h-64"
					priority
				/>
				<h1 className="font-bold text-3xl/tight sm:text-5xl/tight text-[#F5F5F7]">Affordable and Dependable Duct Cleaning Services</h1>
				<p className="mt-4 sm:mt-6 leading-relaxed sm:leading-none text-[#F5F5F7]">Based in Kansas City and Surrounding Areas</p>
				<Link href={"#contact"}>
					<Button className="mt-8 sm:mt-10 bg-[#3A73BA] text-[#F5F5F7]" color="primary">Get a Free Quote</Button>
				</Link>
			</header>
		</main>
	)
}
