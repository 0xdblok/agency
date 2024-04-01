import React from "react";
import Image from "next/image";
import testimonal from "../../asset/testimonal.svg";
import testibutton from "../../asset/testibutton.svg";
import testibutton1 from "../../asset/testibutton1.svg";

export default function Testimonal() {
  return (
    <div className="px-40 pt-[250px]">
      <div className=" w-full items-center  p-11">
        <div className=" w-full pt-2 rounded-xl bg-[#F4F4F4]">
          <div className="w-full flex justify-center">
            <Image src={testimonal} alt="process" width={150} height={150} />
          </div>
          <h2 className="text-center px-6 pt-9 text-[25px] not-italic font-bold leading-[normal]">
            “Be genuine in your assessment, and provide constructive feedback to
            benefit both potential customers and the company providing the
            product or service.”
          </h2>
          <h3 className="text-center pt-9 text-xl not-italic font-semibold leading-[normal]">
            Jacqueline Miller
          </h3>
          <p className="text-center text-base not-italic font-normal leading-[normal] tracking-[0.48px]">
            CEO of an eduport
          </p>
          <div className="w-full flex gap-3 pt-5 pb-4 justify-center">
            <Image src={testibutton} alt="process" width={44} height={44} />
            <Image src={testibutton1} alt="process" width={44} height={44} />
          </div>
        </div>
      </div>
    </div>
  );
}
