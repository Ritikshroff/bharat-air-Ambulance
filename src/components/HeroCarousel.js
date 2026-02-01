// src/component/HeroCarousel.js
"use client"
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const HeroCarousel = () => {
    return (
        <div className="w-full h-64">
            <Carousel 
                autoPlay 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false} 
                className="h-full"
            >
                <div className="relative h-64">
                    <Image 
                        src="/images/slide1.jpg" 
                        alt="Slide 1" 
                        // layout="fill" 
                        // objectFit="cover"
                        fill style={{ objectFit: 'cover' }} 
                        className="opacity-80"
                    />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-2xl font-semibold italic">"Serving with compassion and care"</h2>
                        <a href="tel:+918882383902" className="mt-4 inline-block bg-white text-black px-4 py-2 rounded">
                            Call Now
                        </a>
                    </div>
                </div>
                <div className="relative h-64">
                    <Image 
                        src="/images/slide2.jpg" 
                        alt="Slide 2" 
                        // layout="fill" 
                        // objectFit="cover" 
                        fill style={{ objectFit: 'cover' }}
                        className="opacity-80"
                    />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-2xl font-semibold italic">"In times of grief, we stand with you"</h2>
                        <a href="tel:+918882383902" className="mt-4 inline-block bg-white text-black px-4 py-2 rounded">
                            Call Now
                        </a>
                    </div>
                </div>
                <div className="relative h-64">
                    <Image 
                        src="/images/slide3.jpg" 
                        alt="Slide 3" 
                        // layout="fill" 
                        // objectFit="cover"
                        fill style={{ objectFit: 'cover' }} 
                        className="opacity-80"
                    />
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-2xl font-semibold italic">"Your trusted partner in sorrowful times"</h2>
                        <a href="tel:+918882383902" className="mt-4 inline-block bg-white text-black px-4 py-2 rounded">
                            Call Now
                        </a>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default HeroCarousel;
