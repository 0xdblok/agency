import React from "react";
import Navbar from "../component/global/navbar";
import Footer from "../component/global/footer";
import Hero from "../component/Contact/hero";
export default function Contact() {
  return (
    <div className=" py-6  w-full bg-[#0C0C0C] ">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
