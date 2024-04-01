import React from "react";
import Image from "next/image";
import hero2 from "../../asset/hero2.svg";
import trial from "../../asset/start-trial.svg";
import company from "../../asset/company.svg";
import company2 from "../../asset/company2.svg";
import company3 from "../../asset/company3.svg";
import company4 from "../../asset/company4.svg";

export default function Hero() {
  return (
    <div className="px-40 flex pt-[162px]">
      <div className="flex flex-col items-start w-1/2 ">
        <h1 className="text-[#FBFBFB] text-6xl not-italic font-semibold leading-[normal]">
          Ready to take your{" "}
          <span className="text-[#64CCC5]">Business Growth </span>to the next
          level?
        </h1>
        <p className="text-[#FBFBFB] pt-6 text-lg not-italic font-normal leading-[normal] tracking-[0.54px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa
          libero egestas malesuada viverra gravida libero cursus nulla leo
          pulvinar.
        </p>
        <div className="pt-8">
          <button className="flex rounded-2xl bg-justify-center items-center gap-2.5 pl-2.5 pr-5 py-2.5 bg-[#FBFBFB]">
            <Image
              className=""
              src={trial}
              alt="hero2"
              width={30}
              height={30}
            />{" "}
            Start your Free Trial
          </button>
          <h5 className="w-full pl-4 text-xl pt-28 text-[#64CCC5] not-italic font-semibold leading-[normal]">
            Trusted by Leading Brands
          </h5>
          <div className="flex inline-flex items-center gap-2.5 ">
            <Image
              className=""
              src={company}
              alt="hero2"
              width={148}
              height={54}
            />
            <Image
              className=""
              src={company2}
              alt="hero2"
              width={148}
              height={54}
            />
            <Image
              className=""
              src={company3}
              alt="hero2"
              width={148}
              height={54}
            />
            <Image
              className=""
              src={company4}
              alt="hero2"
              width={148}
              height={54}
            />
          </div>
        </div>
      </div>
      <div className=" w-1/2  ">
        <div className="circlePosition w-[490px] h-[265px] bg-[#23e6d9] rounded-[50%] absolute z-1 top-[80%] left-[-7%] translate-x-[-50%] translate-y-[-50%] blur-[220px]"></div>
        <div className="circlePosition w-[190px] h-[265px] bg-[#23e6d9] rounded-[50%] absolute z-1 top-[40%] left-[60%] translate-x-[-50%] translate-y-[-50%] blur-[220px]"></div>
        <div className="w-full">
          <Image
            className="w-full"
            src={hero2}
            alt="hero2"
            width={950}
            height={950}
          />
        </div>
      </div>
    </div>
  );
}
