import bgImage from "@/app/assets/kansas-city-bg.jpg"
import dddcLogo from "@/app/assets/Duct-Daddy-01.png"
import { Button } from "@nextui-org/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
	return (
		<main id="about" className="relative h-[72vh] flex items-center justify-center overflow-hidden">
			<Image
				src={bgImage}
				alt="Picture of Missouri, Kansas City"
				className="absolute z-[-1] w-full h-full object-cover filter brightness-50"
				priority
			/>
			<header className="relative z-10 flex flex-col justify-center items-center text-center max-w-2xl px-4">
				<Image
					src={dddcLogo}
					alt="Duct Daddy Duct Cleaning logo"
					width={1000}
					height={1000}
					className="h-48 w-auto"
				/>
				<h1 className="text-4xl font-bold text-white">Affordable and Dependable Duct Cleaning Services</h1>
				<p className="text-lg text-white mt-4">Based in Kansas City and Surrounding Areas</p>
				<Link href={"#contact-us"}>
					<Button className="mt-6" color="primary">Get a Free Quote</Button>
				</Link>
			</header>
		</main>
	)
}
