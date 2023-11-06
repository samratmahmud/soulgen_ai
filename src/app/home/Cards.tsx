import Buttons from "@/components/common/Buttons";
import {url} from "inspector";
import Link from "next/link";
import React from "react";

const cardsData = [
  {
    title: "Customize Your Anime Art",
    contain:
      "Soulgen is an AI Art Generator that allows you create animation in all styles. Fly your imagination, describe it with prompt and turn it into anime picture",
    contain2:
      "Remember your creation belongs to you as you make your soulmate with the unique anime character!",
    button: [
      {
        name: "Free trial now",
        icon: "/images/Arrow 2.png",
        url: "",
      },
    ],
    thumbneil: "/images/desc-1-default 1.png",
  },
  {
    title: "Generate Real Soulmate with Imagination",
    contain:
      "As an easy-to-use AI Image Generator, Soulgen aims to fullfill your dream with great effort.",
    contain2:
      "Describe your dream girl with simply words and we will generate your art in mere seconds. Making soulmate has never been this easy and real!",
    button: [
      {
        name: "Free trial now",
        icon: "/images/Arrow 2.png",
        url: "",
      },
    ],
    thumbneil: "/images/desc-2-default 1.png",
  },
];

function Cards() {
  return (
    <section>
      <div className="flex flex-col md:gap-44 gap-20 md:mb-40 mb-16">
        {cardsData.map(
          ({title, contain, contain2, thumbneil, button}, index) => (
            <div
              key={index}
              className="flex lg:flex-row flex-col gap-6  justify-between lg:even:flex-row-reverse"
            >
              <div className="md:max-w-[743px]">
                <div className="md:text-xl text-2xl font-semibold capitalize text-white mb-6">
                  {title}
                </div>
                <div className="md:text-base text-md font-light capitalize text-white">
                  {contain}
                </div>
                <div className="md:text-base text-md font-light capitalize text-white mb-8">
                  {contain2}
                </div>
                <div>
                  {button.map(({name, icon, url}) => (
                    <Link href={url}>
                      <Buttons name={name} icon={icon} />
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <img className="w-full" src={thumbneil} alt="" />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Cards;
