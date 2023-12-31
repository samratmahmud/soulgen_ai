import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React from "react";

const pictureGroup = [
  {
    title: "AI Girl Showcase",
    thumbneil: [
      "/images/Rectangle 15.png",
      "/images/Rectangle 16.png",
      "/images/Rectangle 17.png",
      "/images/Rectangle 18.png",
      "/images/Rectangle 19.png",
      "/images/Rectangle 16.png",
      "/images/Rectangle 17.png",
      "/images/Rectangle 18.png",
      "/images/Rectangle 19.png",
      "/images/Rectangle 15.png",
    ],
    button: [
      {
        name: "Free trial now",
        icon: "/images/Arrow 2.png",
        url: "",
      },
    ],
  },
  {
    title: "AI Girl Showcase",
    thumbneil: [
      "/images/Rectangle 5.png",
      "/images/Rectangle 6.png",
      "/images/Rectangle 7.png",
      "/images/Rectangle 8.png",
      "/images/Rectangle 9.png",
      "/images/Rectangle 7.png",
      "/images/Rectangle 8.png",
      "/images/Rectangle 9.png",
      "/images/Rectangle 5.png",
      "/images/Rectangle 6.png",
    ],
    button: [
      {
        name: "Free trial now",
        icon: "/images/Arrow 2.png",
        url: "",
      },
    ],
  },
];

function PicShowcase() {
  return (
    <section>
      <div className="flex flex-col md:gap-40 gap-16 md:mb-40 mb-16">
        {pictureGroup.map(({title, thumbneil, button}, index) => (
          <div key={index} className="flex flex-col gap-8">
            <div className="md:text-xl text-2xl font-bold text-white text-center capitalize">
              {title}
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 md:gap-6 gap-4">
              {thumbneil.map((item) => (
                <div className="">
                  <img className="w-full" src={item} alt="" />
                </div>
              ))}
            </div>
            <div>
              {button.map(({name, icon, url}, index) => (
                <div key={index} className="flex justify-center">
                  <Link href={url}>
                    <Buttons name={name} icon={icon} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PicShowcase;
