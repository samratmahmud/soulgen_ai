import {link} from "fs";
import {url} from "inspector";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    linksBar: [
      {
        links: "Community",
        url: "",
      },
      {
        links: "/images/Intragram.svg",
        url: "",
      },
      {
        links: "/images/Facebook.svg",
        url: "",
      },
      {
        links: "/images/Tiktok.svg",
        url: "",
      },
      {
        links: "/images/Twiter.svg",
        url: "",
      },
      {
        links: "/images/Youtube.svg",
        url: "",
      },
    ],
  },
  {
    linksBar: [
      {
        links: "Contact us",
        url: "",
      },
      {
        links: "/images/Mail.svg",
        url: "",
      },
      {
        links: "/images/Game.svg",
        url: "",
      },
      {
        links: "/images/roket.svg",
        url: "",
      },
    ],
  },
];

function Footer() {
  return (
    <section className="pb-4">
      <div className="flex justify-end">
        <img role="button" src="/images/Frame (2).svg" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <img src="/images/Frame.svg" alt="" />
        </div>
        <div className="flex justify-between gap-20">
          {footerLinks.map(({linksBar}, index) => (
            <div key={index} className="flex last:gap-2 gap-4">
              {linksBar.map(({links, url}, index) => (
                <div key={index}>
                  <Link href={url} className="text-white">
                    <img src={links} alt="" />
                  </Link>
                </div>
              ))}
            </div>
          ))}
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
