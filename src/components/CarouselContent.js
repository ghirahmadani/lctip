import React from "react";
import "./Carousel.css";

import { Carousel } from "flowbite-react";

const CarouselContent = (props) => {
  return (
    <div className="w-full md:w-[360px] lg:w-[400px] h-[15rem] lg:h-72 rounded-lg overflow-hidden">
      <Carousel>
        <img
          alt="..."
          className="carousel-image static"
          src={props.nameOne}
        />
        <img
          alt="..."
          className="carousel-image static"
          src={props.nameTwo}
        />
        <img
          alt="..."
          className="carousel-image static"
          src={props.nameThree}
        />
      </Carousel>
    </div>
  )
};

export default CarouselContent;
