import React from "react";

import { Carousel } from "flowbite-react";
const CarouselContent = (props) => {
  return (
    <div className="w-[480px] h-72 rounded-lg overflow-hidden">
      <Carousel>
        <img
          alt="..."
          src={props.nameOne}
        />
        <img
          alt="..."
          src={props.nameTwo}
        />
        <img
          alt="..."
          src={props.nameThree}
        />
      </Carousel>
    </div>
  )
};

export default CarouselContent;
