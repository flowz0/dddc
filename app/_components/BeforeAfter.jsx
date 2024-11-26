"use client";
import { ReactCompareSlider } from 'react-compare-slider';

import BeforeImg from '@/app/assets/before.jpg'
import AfterImg from '@/app/assets/after.jpg'
import Image from 'next/image';

export default function BeforeAfter() {
    return (
        <div className='py-20 px-2 bg-[#F5F5F7] md:flex md:flex-col md:justify-center md:items-center'>
            <div className='text-center'>
                <h2 className="text-base/6 font-semibold text-[#3A73BA]">Our Work</h2>
                <p className="mt-6 text-balance text-5xl font-semibold tracking-tight text-[#333333] sm:text-6xl">
                    Before and after pictures
                </p>
            </div>

            <div className='flex justify-center'>
                <ReactCompareSlider className='max-w-fit md:max-w-4xl h-[400px] sm:h-[500px] md:h-[600px] rounded-lg mt-16 shadow-lg'
                    itemOne={<Image src={BeforeImg} alt='Photo 1' className='h-full w-auto object-cover' />}
                    itemTwo={<Image src={AfterImg} alt='Photo 2' className='h-full w-auto object-cover' />}
                />
            </div>

        </div>
    );
}