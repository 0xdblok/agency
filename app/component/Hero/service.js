import React from "react";
import contentM from "../../asset/content-marketing.svg";
import Image from "next/image";
export default function Service() {
  return (
    <div className="px-40 pt-[250px] ">
      <h2 className="pt-12 text-[#64CCC5] text-center text-3xl not-italic font-semibold leading-[normal] ">
        {" "}
        Our Services
      </h2>
      <div className="">
        <h1 className="text-slate-50 px-[316px] text-center text-[64px] pt-6 not-italic font-semibold leading-[normal]">
          High-impact services for your business
        </h1>
      </div>
      <div className="grid items-center gap-20  grid-cols-3 pt-36">
        <div className="flex rounded-3xl bg-[#F4F4F4] flex-col items-start gap-16 shrink-0 p-11">
          <div>
            <Image src={contentM} alt="contentM" width={80} height={80} />
          </div>
          <h3 className="text-2xl not-italic font-medium leading-[normal]">
            Content Marketing
          </h3>
          <p className=" text-lg not-italic font-normal leading-[normal] ">
            Our team creates engaging and shareable content that resonates with
            your audience, drives organic traffic
          </p>
        </div>
        <div className="flex rounded-3xl bg-[#F4F4F4] flex-col items-start gap-16 shrink-0 p-11">
          <div>
            <Image src={contentM} alt="contentM" width={80} height={80} />
          </div>
          <h3 className="text-2xl not-italic font-medium leading-[normal]">
            Graphic Design
          </h3>
          <p className=" text-lg not-italic font-normal leading-[normal] ">
            Unlock the power of visual storytelling with our expert graphic
            design services tailored to elevate your brand and captivate.
          </p>
        </div>
        <div className="flex rounded-3xl bg-[#F4F4F4] flex-col items-start gap-16 shrink-0 p-11">
          <div>
            <Image src={contentM} alt="contentM" width={80} height={80} />
          </div>
          <h3 className="text-2xl not-italic font-medium leading-[normal]">
            Digital Marketing
          </h3>
          <p className=" text-lg not-italic font-normal leading-[normal] ">
            Elevate your brand's online presence with our data-driven digital
            marketing strategies. From SEO and content marketing
          </p>
        </div>
        <div className="flex rounded-3xl bg-[#F4F4F4] flex-col items-start gap-16 shrink-0 p-11">
          <div>
            <Image src={contentM} alt="contentM" width={80} height={80} />
          </div>
          <h3 className="text-2xl not-italic font-medium leading-[normal]">
            Web Design
          </h3>
          <p className=" text-lg not-italic font-normal leading-[normal] ">
            We specialize in creating visually stunning, user-friendly websites
            that align with your brand identity and deliver an exceptional.
          </p>
        </div>
        <div className="flex rounded-3xl bg-[#F4F4F4] flex-col items-start gap-16 shrink-0 p-11">
          <div>
            <Image src={contentM} alt="contentM" width={80} height={80} />
          </div>
          <h3 className="text-2xl not-italic font-medium leading-[normal]">
            IT consulting
          </h3>
          <p className=" text-lg not-italic font-normal leading-[normal] ">
            IT consulting, or information technology consulting, refers to the
            practice of providing advisory and implementation services
          </p>
        </div>
        <div className="flex rounded-3xl bg-[#F4F4F4] flex-col items-start gap-16 shrink-0 p-11">
          <div>
            <Image src={contentM} alt="contentM" width={80} height={80} />
          </div>
          <h3 className="text-2xl not-italic font-medium leading-[normal]">
            Brand identity
          </h3>
          <p className=" text-lg not-italic font-normal leading-[normal] ">
            It involves creating a unique and recognizable identity that sets
            the brand apart from competitors and resonates with the target
            audience.
          </p>
        </div>
      </div>
    </div>
  );
}
