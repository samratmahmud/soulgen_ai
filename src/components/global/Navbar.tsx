"use client";
import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import LoginFile from "./navbarInputFile/LoginFile";
import SingupFile from "./navbarInputFile/SingupFile";
import SimpleBar from "simplebar-react";

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
      <div className="flex justify-between items-center py-7 mb-5 bg-slate-950">
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
        <Drawer
          open={isOpen}
          onClose={toggle}
          direction="left"
          style={{width: "75%"}}
        >
          <SimpleBar style={{height: "100%", backgroundColor: "#030423"}}>
            <div className="bg-slate-900 p-5 h-screen flex flex-col justify-between">
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
                <div className="flex flex-col gap-7 items-center">
                  <LoginFile size="Mobile" />
                  <SingupFile size="Mobile" />
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/images/Frame.svg" alt="" />
              </div>
            </div>
          </SimpleBar>
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar;
