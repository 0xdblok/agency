import React from "react";
import Image from "next/image";
import trial from "../../asset/start-trial.svg";
import contentM from "../../asset/contentM.svg";
export default function About() {
  return (
    <div className="pt-[250px] px-40 text-slate-50">
      <div className="flex inline-flex items-center gap-20">
        <div>
          <Image src={contentM} alt="contentM" width={744} height={703} />
        </div>
        <div className="flex flex-col items-start gap-6">
          <h2 className=" pt-6 text-[#64CCC5] text-center text-3xl not-italic font-semibold leading-[normal] ">
            {" "}
            About us
          </h2>
          <h1 className="text-slate-50   text-[64px] pt-6 not-italic font-semibold leading-[normal]">
            The core mission behind all our work
          </h1>
          <p className=" text-lg not-italic font-normal leading-[normal] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut
            tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.
          </p>
          <button className="flex text-black rounded-2xl bg-justify-center items-center gap-2.5 pl-2.5 pr-5 py-2.5 bg-[#FBFBFB]">
            <Image src={trial} alt="hero2" width={28} height={28} />
            Start your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
