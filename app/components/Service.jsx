import { Button } from "@nextui-org/button";
import testimage from '@/app/assets/dryer-vent-cleaning.jpeg'
import Image from "next/image";
import Link from "next/link";

export default function Service({ serviceImage, serviceTitle, serviceDesc, serviceCTAButton }) {
    return (
        <article className="max-w-4xl md:max-w-xl lg:max-w-sm max-h-full bg-[#FFFFFF] md:border md:border-gray-200 md:rounded-lg sm:shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
                src={serviceImage || testimage}
                alt="Service image"
                className="rounded-lg shadow-lg sm:shadow-none sm:rounded-b-none sm:rounded-t-lg"
                width={1920}
                height={1080}
            />
            <header className="p-2 pt-4 sm:py-3.5 sm:px-5 sm:pb-6">
                <a href="#contact">
                    <h2 className="text-xl font-semibold tracking-tight text-[#333333] dark:text-white">
                        {serviceTitle}
                    </h2>
                </a>
                <p className="mt-2.5 font-normal tracking-normal leading-relaxed text-[rgba(51,51,51,0.85)] dark:text-gray-400">
                    {serviceDesc}
                </p>
                <Button as={Link} href="#booking" className="mt-5 bg-[#3A73BA] text-[#F5F5F7]" radius="lg"
                    endContent={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    }
                >
                    {serviceCTAButton}
                </Button>
            </header>
        </article>
    )
}
