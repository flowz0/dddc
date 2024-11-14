import { Button } from "@nextui-org/button";
import testimage from '@/app/assets/dryer-vent-cleaning.jpeg'
import Image from "next/image";

export default function Service({ serviceImage, serviceTitle, serviceDesc, serviceCTAButton }) {
    return (
        <article className="max-w-4xl md:max-w-xl lg:max-w-sm max-h-full bg-white md:border md:border-gray-200 md:rounded-lg sm:shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Image
                src={serviceImage || testimage}
                alt="Service image"
                className="rounded-lg shadow-md sm:shadow-none sm:rounded-b-none sm:rounded-t-lg"
                width={1920}
                height={1080}
            />
            <header className="p-2 sm:p-6 pt-4">
                <a href="#">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {serviceTitle}
                    </h2>
                </a>
                <p className="mt-2 font-medium tracking-tight text-gray-800 dark:text-gray-400">
                    {serviceDesc}
                </p>
                <Button className="mt-4" color="primary" radius="lg"
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
