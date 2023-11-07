"use client";
import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Buttons from "../common/Buttons";
import LoginFile from "../common/LoginFile";
import SingupFile from "../common/SingupFile";

const navLink = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Generate",
    url: "/",
  },
  {
    name: "Pricing",
    url: "/",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  let toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="flex justify-between items-center pt-7 mb-9 ">
        <Link href="/">
          <img src="/images/Frame (1).svg" alt="" />
        </Link>
        <div className="hidden md:block">
          <div className="flex">
            {navLink.map(({name, url}, index) => (
              <div key={index} className="">
                <Link
                  href={url}
                  className="text-white font-medium text-md p-3 hover:underline"
                >
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-3 items-center">
            <LoginFile />
            <SingupFile />
          </div>
        </div>
        <div onClick={toggle} className="w-9 h-9 md:hidden">
          <img src="/images/icons8-menu.svg" alt="" />
        </div>
      </div>
      <div className="md:hidden">
        <Drawer open={isOpen} onClose={toggle} direction="left">
          <div className="bg-slate-900 p-5 h-full flex flex-col justify-between">
            <div>
              <Link href="/" className="flex justify-center mb-10">
                <img src="/images/Frame (1).svg" alt="" />
              </Link>
              <div className="flex flex-col gap-2 mb-5">
                {navLink.map(({name, url}, index) => (
                  <div
                    key={index}
                    className="py-2.5 bg-slate-800 hover:bg-slate-950 duration-300 text-center rounded-lg"
                  >
                    <Link
                      href={url}
                      className="text-white font-medium text-md hover:underline"
                    >
                      {name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-5 items-center">
                <div className="text-sm font-medium text-white py-2.5 px-10 bg-slate-300/10 rounded-full hover:bg-slate-800 duration-300">
                  Log in
                </div>
                <div className="text-sm font-medium text-slate-950 py-2.5 px-12 bg-gray-200 rounded-full hover:bg-slate-100 duration-300 focus:scale-90">
                  Sing in
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/images/Frame.svg" alt="" />
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar;
