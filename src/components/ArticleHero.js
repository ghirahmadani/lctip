import React from "react";
import Button from "./Button";

import Wiki from "../assets/Wiki.png";
import Pina from "../assets/Pina.png";

const ArticleHero = (props) => {
  return (
    <div className="bg-white border-b my-24">
      <div className="relative isolate">
        <div className="flex mx-auto max-w-5xl py-36 justify-center items-center">
          <div className="hidden md:flex order-1">
            <img src={Wiki} alt="Mascot Fraga" className="h-48 w-48"></img>
          </div>
          <div className="hidden md:flex order-3">
            <img src={Pina} alt="Mascot Fraga" className="h-48 w-48"></img>
          </div>
          <div className="order-2">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 w-36 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              LCTIP XXXI
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl fredoka font-bold text-stone-900">
              {props.title}
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button name="Register" link="/registration" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHero;
