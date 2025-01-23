"use client";
import { ReactCompareSlider } from 'react-compare-slider';
import Image from 'next/image';

import Before1 from '@/app/assets/BeforeAfter/before-1.jpg'
import Before2 from '@/app/assets/BeforeAfter/before-2.jpeg'
import Before3 from '@/app/assets/BeforeAfter/before-3.jpeg'

import After1 from '@/app/assets/BeforeAfter/after-1.jpg'
import After2 from '@/app/assets/BeforeAfter/after-2.jpeg'
import After3 from '@/app/assets/BeforeAfter/after-3.jpeg'

export default function BeforeAfter() {
    return (
        <div id='work' className='py-20 px-4 bg-[#F5F5F7] md:flex md:flex-col md:justify-center md:items-center'>
            <div className='text-center'>
                <h2 className="text-base/6 font-semibold text-[#3A73BA]">Our Work</h2>
                <p className="mt-4 text-balance text-5xl font-semibold tracking-tight text-[#333333] sm:text-6xl">
                    Before and after pictures
                </p>
            </div>

            <div className='flex flex-col items-center justify-center gap-x-6 sm:flex-row'>
                <ReactCompareSlider className='mt-8 max-w-fit md:max-w-4xl h-[400px] sm:h-[440px] md:h-[480px] rounded-lg shadow-lg'
                    itemOne={<Image src={Before1} alt='Photo before service 1' className='h-full w-auto object-cover' />}
                    itemTwo={<Image src={After1} alt='Photo after service 1' className='h-full w-auto object-cover' />}
                />
                <ReactCompareSlider className='mt-8 max-w-fit md:max-w-4xl h-[400px] sm:h-[440px] md:h-[480px] rounded-lg shadow-lg'
                    itemOne={<Image src={Before3} alt='Photo before service 3' className='h-full w-auto object-cover' />}
                    itemTwo={<Image src={After3} alt='Photo after service 3' className='h-full w-auto object-cover' />}
                />
            </div>

        </div>
    );
}