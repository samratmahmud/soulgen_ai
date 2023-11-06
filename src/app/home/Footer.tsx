import {link} from "fs";
import {url} from "inspector";
import Link from "next/link";
import React from "react";

const communityLinks = [
  {
    name: "/images/Intragram.svg",
    url: "https://www.instagram.com/",
  },
  {
    name: "/images/Facebook.svg",
    url: "https://www.facebook.com/",
  },
  {
    name: "/images/Tiktok.svg",
    url: "https://www.tiktok.com/en/",
  },
  {
    name: "/images/Twiter.svg",
    url: "https://twitter.com/",
  },
  {
    name: "/images/Youtube.svg",
    url: "https://www.youtube.com/",
  },
];

const contactBar = [
  {
    name: "/images/Mail.svg",
    url: "https://mail.google.com/",
  },
  {
    name: "/images/Game.svg",
    url: "https://www.mygamehive.com/",
  },
  {
    name: "/images/roket.svg",
    url: "https://play.google.com/",
  },
];

function Footer() {
  return (
    <section className="lg:flex justify-between pb-4">
      <div className="lg:flex items-center gap-12 mb-5 lg:mb-0">
        <div className="mb-5 lg:mb-0">
          <img src="/images/Frame.svg" alt="" />
        </div>
        <div className="flex items-center justify-between lg:justify-normal gap-10">
          <div className="lg:text-xs text-sm text-white">Community</div>
          <div className="flex">
            {communityLinks.map(({name, url}, index) => (
              <div
                key={index}
                className="hover:bg-gray-800 rounded p-2 duration-300"
              >
                <Link href={url}>
                  <img src={name} alt="" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center lg:gap-12 gap-7">
        <div className="flex gap-10 justify-between lg:justify-normal items-center">
          <div className="lg:text-xs text-sm text-white">Contact us</div>
          <div className="flex gap-">
            {contactBar.map(({name, url}, index) => (
              <div
                key={index}
                className="hover:bg-gray-800 rounded p-1 duration-300"
              >
                <Link href={url}>
                  <img src={name} alt="" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-6">
          <Link href="" className="text-xs font-light capitalize text-white">
            Terms of service
          </Link>
          <Link href="" className="text-xs font-light capitalize text-white">
            Privacy policy
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
