import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "../component/About/hero";
import Stat from "../component/About/stat";
import Boost from "../component/About/boost";
import Team from "../component/About/team";
import Click from "../component/About/click";
export default function About() {
  return (
    <div className=" pt-6 w-full   h-full ">
      <Navbar className=" " />
      <Hero />
      <Stat />
      <Boost />
      <Team />
      <Click />

      <Footer />
    </div>
  );
}
