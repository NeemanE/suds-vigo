import React from "react";
import Image from "next/image";
import Logo from "@/public/images/Suds/LogoNoBg.png";

const bgImageUrl = "/images/Suds/SudsHero.jpg";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className=" text-5xl font-bold">
            <Image src={Logo} alt="Suds Logo" width={480} height={"auto"} />
          </h1>
          <p className="mb-5 font-bold text-2xl italic">
            Your one and only to serve your laundry needs
          </p>
        </div>
      </div>
    </div>
  );
}
