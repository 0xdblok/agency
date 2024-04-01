import React from "react";
import Image from "next/image";
import showcase from "../../asset/showcase.svg";
import showcase1 from "../../asset/showcase1.svg";
import showcase2 from "../../asset/showcase2.svg";
import showcase3 from "../../asset/showcase3.svg";
import trial from "../../asset/start-trial.svg";
export default function Showcase() {
  return (
    <div className="px-40 pt-[250px]">
      <h1 className="text-slate-50 text-center  text-[64px] pt-6 not-italic font-semibold leading-[normal]">
        Recent Showcase
      </h1>
      <div className="  grid grid-cols-2 w-full justify-center items-center pt-20 text-slate-50 gap-16">
        <div className="rounded-2xl flex flex-col items-center  l">
          <div>
            <Image src={showcase} alt="process" width={663} height={450} />
            <h3 className="pt-6 text-start text-3xl not-italic font-semibold leading-[normal]">
              Web UI Design
            </h3>
            <p className="  text-start text-lg not-italic font-normal leading-[normal] tracking-[0.54px]">
              Creative UI Design
            </p>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col items-center  l">
          <div>
            <Image src={showcase1} alt="process" width={663} height={450} />
            <h3 className="pt-6 text-start text-3xl not-italic font-semibold leading-[normal]">
              Web UI Design
            </h3>
            <p className="  text-start text-lg not-italic font-normal leading-[normal] tracking-[0.54px]">
              Creative UI Design
            </p>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col items-center  l">
          <div>
            <Image src={showcase2} alt="process" width={663} height={450} />
            <h3 className="pt-6 text-start text-3xl not-italic font-semibold leading-[normal]">
              Web UI Design
            </h3>
            <p className="  text-start text-lg not-italic font-normal leading-[normal] tracking-[0.54px]">
              Creative UI Design
            </p>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col items-center">
          <div>
            <Image src={showcase3} alt="process" width={663} height={450} />
            <h3 className="pt-6 text-start text-3xl not-italic font-semibold leading-[normal]">
              UI Design
            </h3>
            <p className=" text-start text-lg not-italic font-normal leading-[normal] tracking-[0.54px]">
              Creative Rebranding for logo
            </p>
          </div>
        </div>{" "}
      </div>{" "}
      <div className="flex  justify-center pt-16">
        <div>
          <button className="flex  text-black rounded-2xl bg-  gap-2.5 pl-2.5 pr-5 py-2.5 bg-[#FBFBFB]">
            <Image src={trial} alt="hero2" width={28} height={28} />
            Start your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
