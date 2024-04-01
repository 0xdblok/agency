import React from "react";
import hero from "./hero.png";
import starr from "./starr.png";
import rated from "./rated.png";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="mx-48  mt-12 bg-[#0C0C0C] gap-8  rounded-2xl flex pt-[92px]">
      <div className="flex pl-16 flex-col items-start  w-1/2 ">
        <p className="text-[#FBFBFB]">Pleasure and so read the was hope.</p>
        <h1 className="text-[#FBFBFB] text-6xl not-italic font-semibold leading-[normal]">
          Ready to take <span className="text-[#64CCC5]">your business </span>{" "}
          to the next level?
        </h1>
        <p className="text-[#FBFBFB] pt-6 text-lg not-italic font-normal leading-[normal] tracking-[0.54px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
          libero egestas malesuada viverra gravida libero cursus nulla leo
          pulvinar.
        </p>
        <div className="pt-12 text-[#FBFBFB] gap-4 flex">
          <div>
            {" "}
            <Image
              className=" "
              src={rated}
              alt="hero2"
              width={75}
              height={75}
            />
          </div>
          <div className="mb-24">
            {" "}
            <h2>Rated 4.9/5 stars</h2>
            <Image
              className=" "
              src={starr}
              alt="hero2"
              width={75}
              height={75}
            />
          </div>
        </div>
      </div>
      <div className="   ">
        <div className="">
          <Image
            className=" right-48 top- "
            src={hero}
            alt="hero2"
            width={550}
            height={550}
          />
        </div>
      </div>
    </div>
  );
}
