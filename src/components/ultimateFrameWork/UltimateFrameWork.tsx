import React from 'react';
import { shadowsIntoLight } from '@/fonts/fonts';

function UltimateFrameWork() {
    return (
        <div className="w-full p-4 md:p-8 flex flex-col justify-center items-center">
            {/* Heading */}
            <div className="w-[80%] md:w-[70%] lg:w-[55%] mx-auto mb-8">
                <h1 className={`text-2xl md:text-5xl text-center ${shadowsIntoLight.className}`}>
                    But, we are changing this with Ulti-Mate framework
                </h1>
            </div>

            {/* Video Container */}
            <div className="md:w-[70%] sm:[w-80%] relative h-96 md:h-[24rem]">
                <video
                    className="w-full h-full rounded-lg object-contain"
                    controls
                    aria-label="Ulti-Mate Framework Video"
                >
                    <source src="/videos/ultimate-framework/Ultimate-FrameWork.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default UltimateFrameWork;