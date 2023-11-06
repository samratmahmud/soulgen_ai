import Buttons from "@/components/common/Buttons";
import React from "react";

function Header() {
  return (
    <section className="mb-40">
      <div className="text-xl bg-yellowToBlue text-linear text-center mb-2">
        AI Image Generator from Text
      </div>
      <div className="text-md text-white font-light capitalize text-center mb-1">
        Create a real/anime image from nothing but text prompt in mere seconds.
      </div>
      <div className="text-md text-white font-light capitalize text-center mb-8">
        SoulGen AI art generator makes your dream girls come to reality
      </div>
      <div className="flex justify-center mb-8">
        <img src="/images/Rectangle 3.png" alt="" />
      </div>
      <div className="flex justify-center">
        <Buttons name="Free trial now" icon="/images/Arrow 2.png" />
      </div>
    </section>
  );
}

export default Header;
