import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function BeforeAfter() {
    return (
        <div className='md:h-full md:flex md:flex-col md:justify-center md:items-center pt-20 px-2'>
            <div className='text-center'>
                <h2 className="text-base/7 font-semibold text-sky-600">Gallery</h2>
                <p className="text-balance text-4xl font-semibold tracking-tight mt-4 text-gray-900">
                    Before and after pictures
                </p>
            </div>
            <ReactCompareSlider
                className='mt-6 max-w-3xl rounded-lg'
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