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
    <section className="mb-40">
      <div className="text-xl text-white font-bold capitalize mb-2 text-center">
        How to Get AI Generated Images in 3 Steps?
      </div>
      <div className="text-md text-white font-light capitalize mb-12 text-center">
        SoulGen AI Art Generator comes with easy-to-use and user-friendly
        interface. Make AI generated images in 3 steps:
      </div>
      <div className="flex gap-3 items-center pt-9 pb-10 px-4 justify-center bg-slate-900 rounded-[20px]">
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
