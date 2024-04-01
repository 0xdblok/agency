import React from "react";
import Image from "next/image";
import logo from "../../asset/logo.svg";
import Link from "next/link";
export default function Footer() {
  const nav = [
    { href: "/home", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/contact-us", label: "Contact Us" },
  ];
  return (
    <div className="px-40 pt-12  w-full ">
      <div className="flex  gap-20 text-slate-100 w-full ">
        <div className="">
          <Image src={logo} alt="logo" width={154} height={40} />

          <p className="pt-6 ">
            We’re a team of strategic creator and digital innovator, united
            focus in our pursuit of mastery and joyful.
          </p>
        </div>
        <div className="">
          <h3>Pages</h3>
          <nav>
            <ul>
              <li></li>
            </ul>
          </nav>
        </div>
        <div className="">
          <h3>Utility Page</h3>

          <nav className="  shrink-0 items-start gap- text-white ">
            <ul>
              <li className="text-xl not-italic font-normal leading-[normal] text-[#FBFBFB]">
                Home
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div>
            <label
              for="first-name"
              className="mb-2 inline-block text-sm sm:text-base">
              Subscribe
            </label>
            <input
              name="first-name"
              className="w-full mt-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
