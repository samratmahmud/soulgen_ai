import Link from "next/link";
import React from "react";

function LoginFile() {
  const [isOpen, setIsOpen] = React.useState(false);
  let toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="group relative">
      <Link
        onClick={toggle}
        href=""
        role="button"
        className="text-sm font-medium text-white py-2.5 px-4 bg-slate-300/10 rounded-full hover:bg-slate-800 duration-300"
      >
        Log in
      </Link>
      {isOpen && (
        <div className="duration-300 absolute md:w-[350px] w-[80%] right-0 translate-y-3 bg-gray-100 rounded-lg py-5 px-4">
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
            <button className="text-md font-semibold text-white py-2.5 px-6 bg-blue-600 hover:bg-blue-700 duration-300 rounded-lg w-full">
              Log in
            </button>
          </div>
          <Link href="" className="text-md text-blue-600 flex justify-center">
            Forgotten password?
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginFile;
