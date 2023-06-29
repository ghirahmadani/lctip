import React from "react";

import { Carousel } from "flowbite-react";

const CarouselContent = (props) => {
  return (
    <div className="w-full md:w-[360px] lg:w-[400px] h-[15rem] lg:h-72 rounded-lg overflow-hidden no-drag" draggable="false" onDragStart={(e) => { e.preventDefault() }}>
      <Carousel >
        <img
          alt="..."
          className="pointer-events-none" 
          src={props.nameOne}
        />
        <img
          alt="..."
          className="pointer-events-none"
          src={props.nameTwo}
        />
        <img
          alt="..."
          className="pointer-events-none"
          src={props.nameThree}
        />
      </Carousel>
    </div>
  )
};

export default CarouselContent;
