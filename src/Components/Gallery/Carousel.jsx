import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    // Interval to change the slide every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 3 seconds

    // Clear the interval when component unmounts or when the slide changes
    return () => clearInterval(interval);
  }, [slide]); // Re-run effect when the slide changes

  return (
    <div className="all">
      <div className="carousel">
        {/* Previous slide button */}
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />

        {/* Render the slides */}
        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        ))}

        {/* Next slide button */}
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />

        {/* Slide indicators */}
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={slide === idx ? "indicator" : "indicator indicator-inactive"}
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
};
