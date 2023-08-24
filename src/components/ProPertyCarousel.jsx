import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

function ProPertyCarousel({data}) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, index) => (
        <img
          src={item}
          alt={`Slide ${index}`}
          key={index}
          className={slide === index ? "slide" : "slide slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((item, index) => (
          <button
            key={index}
            className={
              slide === index ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(index)}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default ProPertyCarousel;
