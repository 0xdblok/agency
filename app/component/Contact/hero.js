import React from "react";
import mail from "./mail.png";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="p-24 mt-4   bg-white">
      <div className="flex">
        <div className="w-1/3 ">
          {" "}
          <h1 className="px-20 text-3xl font-bold">Lets Talk</h1>
          <p className="pt-6 px-20">
            We collaborate with thousands of creators, entrepreneurs and
            complete legends.{" "}
          </p>
          <div className="space-y-4 pt-6  px-20">
            <div className="flex gap-3">
              {" "}
              <Image src={mail} alt="logo" width={43} height={30} />
              <div>
                <h1>Our Email</h1> <p>hello@example.com</p>
              </div>
            </div>
            <div className="flex ">
              {" "}
              <div className="flex gap-3">
                <Image src={mail} alt="logo" width={43} height={30} />
                <div>
                  <h1>Our Email</h1> <p>hello@example.com</p>
                </div>
              </div>
            </div>
            <div className="flex">
              {" "}
              <div className="flex gap-3 ">
                <Image src={mail} alt="logo" width={43} height={30} />
                <div>
                  <h1>Our Email</h1> <p>hello@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-12 rounded-xl bg-slate-300 w-2/3">
          <div className="flex gap-6">
            <label for="first-name" className="flex w-1/2 flex-col">
              Subscribe
              <input
                name="first-name"
                className="w-full  mt-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </label>

            <label for="first-name" className="flex w-1/2 flex-col">
              Subscribe
              <input
                name="first-name"
                className="w-full  mt-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </label>
          </div>
          <div className="flex gap-6 pt-4">
            <label for="first-name" className="flex w-1/2 flex-col">
              Subscribe
              <input
                name="first-name"
                className="w-full  mt-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </label>

            <label for="first-name" className="flex w-1/2 flex-col">
              Subscribe
              <input
                name="first-name"
                className="w-full  mt-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </label>
          </div>
          <div>
            <label
              for="first-name"
              className="mb-2 pt-6 inline-block text-sm sm:text-base">
              Message
            </label>
            <input
              name="first-name"
              className="w-full mt-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="flex pt-6">
            {" "}
            <a
              href="/contact-us"
              className="flex rounded-full justify-center items-center gap-2.5 px-4 py-3 bg-black text-[#FBFBFB]">
              Get in touch
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
