import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-white border-b w-full">
      <div className="isolate">
        <div className="mx-auto pt-36 pb-12 md:py-48">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 w-36 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              HIMITEPA IPB
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl fredoka font-bold text-stone-900">
              Lomba Cepat Tepat<br></br>Ilmu Pangan XXXI
            </h1>
            <p className="mt-6 text-[0.65rem] md:text-lg leading-5 md:leading-8 px-5 md:px-2 text-stone-800">
              The Biggest Annual{" "}
              <span className="font-bold">
                Food Science and Technology Competition
              </span>{" "}<br></br>
              for High School Students from All Over Indonesia held by<br/>Himpunan
              Mahasiswa Ilmu dan Teknologi Pangan IPB{" "}
            </p>
            <div className="mt-8 md:mt-10 flex items-center justify-center gap-x-6">
              <Button name="Register" link="/registration"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
