import Link from "next/link";
import React from "react";
import InputBox from "../template/InputBox";

function SingupFile() {
  const [isOpen, setIsOpen] = React.useState(false);
  let toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative group">
      <Link
        onClick={toggle}
        href=""
        role="button"
        className="text-sm font-medium text-slate-950 py-2.5 px-4 bg-gray-200 rounded-full hover:bg-slate-100 duration-300 focus:scale-90"
      >
        Sing in
      </Link>
      {isOpen && (
        <div className="duration-300 absolute md:w-[500px] w-[80%] right-0 translate-y-4 bg-gray-100 rounded-lg py-5 px-4">
          <div className="text-xl mb-6 font-semibold">Sign Up</div>
          <div>
            <div className="flex gap-3 mb-3">
              <InputBox className="" type="text" placeholder="First Name" />
              <InputBox className="" type="text" placeholder="Last Name" />
            </div>
            <InputBox
              className="mb-3"
              type="email"
              placeholder="Enter your email or number"
            />
            <InputBox
              className="mb-3"
              type="password"
              placeholder="Enter New Password"
            />
            <InputBox className="" type="" />
            <div className="flex justify-center">
              <button className="w-1/2 text-md font-semibold text-white py-2.5 px-6 bg-green-600 hover:bg-green-500 duration-300 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingupFile;
