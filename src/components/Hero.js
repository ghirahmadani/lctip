import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div className="mx-auto max-w-2xl py-36">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 w-36 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              HIMITEPA IPB
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-6xl fredoka font-bold text-stone-900">
              Lomba Cepat Tepat<br></br>Ilmu Pangan XXXI
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-800">
              The Biggest Annual{" "}
              <span className="font-bold">
                Food Science and Technology Competition
              </span>{" "}<br></br>
              for High School Students from All Over Indonesia held by Himpunan
              Mahasiswa Ilmu dan Teknologi Pangan IPB{" "}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button name="Register" link="/registration"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
