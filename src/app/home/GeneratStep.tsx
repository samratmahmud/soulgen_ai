import React from "react";

const steps = [
  {
    thumbneil: "/images/icon 1.svg",
    number: "STEP 1",
    title: "Log in your account or get free trial if you do not have one.",
  },
  {
    iconPic: "/images/Vector.svg",
  },
  {
    thumbneil: "/images/icon 2.svg",
    number: "STEP 2",
    title: "Enter your description or our prompt.",
  },
  {
    iconPic: "/images/Vector.svg",
  },
  {
    thumbneil: "/images/icon 3.svg",
    number: "STEP 3",
    title: "Choose the Real Girl or Anime Girl and click Generate",
  },
];

function GeneratStep() {
  return (
    <section className="md:mb-40 mb-16">
      <div className="md:text-xl text-2xl text-white font-bold capitalize mb-2 text-center">
        How to Get AI Generated Images in 3 Steps?
      </div>
      <div className="text-md text-white font-light capitalize md:mb-12 mb-7 text-center">
        SoulGen AI Art Generator comes with easy-to-use and user-friendly
        interface. Make AI generated images in 3 steps:
      </div>
      <div className="flex md:flex-row flex-col md:gap-3 gap-6 items-center md:pt-9 md:pb-10 py-8 px-4 justify-center bg-slate-900 rounded-[20px]">
        {steps.map(({thumbneil, number, title, iconPic}, index) => (
          <div key={index}>
            <div className="flex flex-col gap-2 items-center text-center">
              <div>
                <img src={thumbneil} alt="" />
              </div>
              <div className="bg-stepNum text-linear font-semibold text-lg capitalize">
                {number}
              </div>
              <div className="text-md text-white font-light capitalize max-w-[300px]">
                {title}
              </div>
            </div>
            <div>
              <img src={iconPic} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GeneratStep;
