import Link from "next/link";
import React from "react";

function SingupFile() {
  return (
    <div className="relative group">
      <Link
        href=""
        role="button"
        className="text-sm font-medium text-slate-950 py-2.5 px-4 bg-gray-200 rounded-full hover:bg-slate-100 duration-300 focus:scale-90"
      >
        Sing in
      </Link>
      <div className="hidden group-hover:block duration-300 absolute md:w-[350px] w-[80%] right-0 translate-y-4 bg-gray-100 rounded-lg py-5 px-4">
        <div className="flex flex-col gap-3 mb-3">
          <input
            className="w-full border-2 border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:border-gray-400"
            type="email"
            id="email"
            placeholder="Enter your email or number"
          />
          <input
            className="w-full border-2 border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:border-gray-400"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <button className="text-md font-semibold text-white py-2.5 px-6 bg-blue-600 rounded-lg w-full">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingupFile;
