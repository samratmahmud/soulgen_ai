import Buttons from "@/components/common/Buttons";
import React from "react";

function Header() {
  return (
    <section className="md:mb-40 mb-16">
      <div className="md:text-xl text-2xl bg-yellowToBlue text-linear text-center md:mb-2 mb-4">
        AI Image Generator from Text
      </div>
      <div className="md:text-md text-sm text-white font-light capitalize text-center mb-8">
        <p className="mb-1">
          Create a real/anime image from nothing but text prompt in mere
          seconds.
        </p>
        <p>SoulGen AI art generator makes your dream girls come to reality</p>
      </div>
      <div className="flex justify-center md:mb-8 mb-5">
        <img src="/images/Rectangle 3.png" alt="" />
      </div>
      <div className="flex justify-center">
        <Buttons name="Free trial now" icon="/images/Arrow 2.png" />
      </div>
    </section>
  );
}

export default Header;
