import React, { useState, useEffect } from 'react';
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const Banner = () => {
    const images = [
        image1,
        image2,
        image3
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToPreviousSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="w-full">
            <div className="w-full h-full relative">
                <img src={images[currentImageIndex]} alt={`bannerImg${currentImageIndex + 1}`} />
                <button className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white rounded-full p-2" onClick={goToPreviousSlide}>
                    &lt;
                </button>
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white rounded-full p-2" onClick={goToNextSlide}>
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default Banner;
