import React from "react";
import process from "../../asset/process.svg";
import idea from "../../asset/idea.svg";
import Image from "next/image";
export default function Process() {
  return (
    <div className=" px-40 pt-[250px] ">
      <h2 className=" pt-6 text-[#64CCC5] text-center text-3xl not-italic font-semibold leading-[normal] ">
        {" "}
        Process
      </h2>
      <h1 className="text-slate-50 text-center  text-[64px] pt-6 not-italic font-semibold leading-[normal]">
        High-impact services for your business
      </h1>
      <div className="flex gap-36 justify-center pt-6  flex-cols-3">
        <div className="p-6">
          <div className="absolute pt-24 mr-12 z-0 ">
            <Image src={process} alt="process" width={339} height={215} />
          </div>
          <div className="flex  gap-6">
            <Image src={idea} alt="process" width={82} height={82} />
            <h1 className="text-slate-50  text-center text-[30.174px] not-italic font-semibold leading-[normal]">
              Ideate
            </h1>
          </div>
          <div className="p-6">
            <p className="text-slate-50 px-6 w-60   text-lg not-italic font-normal leading-[normal] ">
              The ideation process is a crucial phase in the design process
              where creative thinking and brainstorming
            </p>
          </div>
        </div>
        <div className="">
          <div className="absolute ">
            <Image src={process} alt="process" width={339} height={215} />
          </div>
          <div className="flex gap-6">
            <Image src={idea} alt="process" width={82} height={82} />
            <h1 className="text-slate-50  text-center text-[30.174px] not-italic font-semibold leading-[normal]">
              Ideate
            </h1>
          </div>
          <div className="">
            <p className="text-slate-50 w-60 r text-lg not-italic font-normal leading-[normal] pt-6">
              The ideation process is a crucial phase in the design process
              where creative thinking and brainstorming
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="absolute ">
            <Image src={process} alt="process" width={339} height={215} />
          </div>
          <div className="flex gap-6">
            <Image src={idea} alt="process" width={82} height={82} />
            <h1 className="text-slate-50  text-center text-[30.174px] not-italic font-semibold leading-[normal]">
              Ideate
            </h1>
          </div>
          <div className="">
            <p className="text-slate-50 w-60 place-text-center text-lg not-italic font-normal leading-[normal] pt-6">
              The ideation process is a crucial phase in the design process
              where creative thinking and brainstorming
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="absolute ">
            <Image src={process} alt="process" width={339} height={215} />
          </div>
          <div className="flex gap-6">
            <Image src={idea} alt="process" width={82} height={82} />
            <h1 className="text-slate-50  text-center text-[30.174px] not-italic font-semibold leading-[normal]">
              Ideate
            </h1>
          </div>
          <div className="">
            <p className="text-slate-50 w-60 place-text-center text-lg not-italic font-normal leading-[normal] pt-6">
              The ideation process is a crucial phase in the design process
              where creative thinking and brainstorming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
