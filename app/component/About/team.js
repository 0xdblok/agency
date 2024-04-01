import React from "react";
import team from "./team.png";
import Image from "next/image";
export default function Team() {
  return (
    <div>
      <div className="flex justify-center pt-16">
        <h1 className="text-2xl font-bold "> Our Team</h1>
      </div>
      <div className="px-56 flex pt-8 gap-8">
        <div>
          {" "}
          <Image
            className="w-full "
            src={team}
            alt="hero2"
            width={550}
            height={550}
          />
          <p className="font-bold pt-1 text-xl">Ester Howards</p>{" "}
          <p className="pt-2">Founder & CEO </p>
        </div>
        <div>
          {" "}
          <Image
            className="w-full "
            src={team}
            alt="hero2"
            width={550}
            height={550}
          />
          <p className="font-bold pt-1 text-xl">Ester Howards</p>{" "}
          <p className="pt-2">Founder & CEO </p>
        </div>
        <div>
          {" "}
          <Image
            className="w-full "
            src={team}
            alt="hero2"
            width={550}
            height={550}
          />
          <p className="font-bold pt-1 text-xl">Ester Howards</p>{" "}
          <p className="pt-2">Founder & CEO </p>
        </div>
      </div>
    </div>
  );
}
