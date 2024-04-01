import React from "react";
import Image from "next/image";
import logo from "../../asset/logo.svg";
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact Us" },
];
export default function Navbar() {
  return (
    <div className="flex justify-between w-full px-48  ">
      <div className=" ">
        <Image src={logo} alt="logo" width={154} height={40} />
      </div>
      <nav className="flex shrink-0  py-2 items-start gap-8 text-white ">
        {nav.map((option) => (
          <Link href={option.href} key={option.label}>
            <ul>
              <li className="text-xl not-italic font-normal leading-[normal] text-[#FBFBFB]">
                {option.label}
              </li>
            </ul>
          </Link>
        ))}
      </nav>
      <div>
        <a
          href="/contact-us"
          className="flex rounded-full justify-center items-center gap-2.5 px-4 py-3 bg-white">
          Get in touch
        </a>
      </div>
    </div>
  );
}
