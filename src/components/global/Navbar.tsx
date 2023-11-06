import Link from "next/link";
import React from "react";

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
  return (
    <nav>
      <div className="flex justify-between items-center pt-7 mb-9">
        <Link href="/">
          <img src="/images/Frame (1).svg" alt="" />
        </Link>
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
        <div className="flex gap-3 items-center">
          <div
            role="button"
            className="text-sm font-medium text-white py-2.5 px-4 bg-slate-300/10 rounded-full hover:bg-slate-800 duration-300"
          >
            Log in
          </div>
          <div
            role="button"
            className="text-sm font-medium text-slate-950 py-2.5 px-4 bg-gray-200 rounded-full hover:bg-slate-100 duration-300 focus:scale-90"
          >
            Sing in
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
