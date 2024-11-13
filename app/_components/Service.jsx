import { Button } from "@nextui-org/button";
import testimage from '@/app/assets/dryer-vent-cleaning.jpeg'
import Image from "next/image";

export default function Service({ serviceImage, serviceTitle, serviceDesc, serviceCTAButton }) {
    return (
        <article className="max-w-4xl md:max-w-xl lg:max-w-sm max-h-full bg-white md:border md:border-gray-200 md:rounded-lg sm:shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Image
                src={serviceImage || testimage}
                alt="Service image"
                className="rounded-xl shadow-md md:shadow-none md:rounded-b-none md:rounded-t-lg"
                width={1920}
                height={1080}
            />
            <header className="p-2 sm:px-4 sm:py-4">
                <a href="#">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {serviceTitle}
                    </h2>
                </a>
                <p className="mt-2 font-medium text-gray-700 dark:text-gray-400">
                    {serviceDesc}
                </p>
                <Button className="mt-4" color="primary"
                    endContent={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
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
