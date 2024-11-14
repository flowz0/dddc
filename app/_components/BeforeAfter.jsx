import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function BeforeAfter() {
    return (
        <div className='pt-20 px-2 bg-[#F5F5F7] md:h-full md:flex md:flex-col md:justify-center md:items-center'>
            <div className='text-center'>
                <h2 className="text-base/7 font-semibold text-[#3A73BA]">Gallery</h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-[#333333] sm:text-6xl">
                    Before and after pictures
                </p>
            </div>
            <ReactCompareSlider
                className='mt-16 max-w-3xl rounded-lg'
                itemOne={
                    <ReactCompareSliderImage
                        srcSet="https://cdn.pixabay.com/photo/2024/11/07/03/12/lizard-9179598_1280.jpg"
                        alt="Image one"
                    />
                }
                itemTwo={
                    < ReactCompareSliderImage
                        srcSet="https://cdn.pixabay.com/photo/2024/09/01/11/36/tansy-9013813_1280.jpg"
                        alt="Image two"
                    />
                }
            />
        </div>
    );
}