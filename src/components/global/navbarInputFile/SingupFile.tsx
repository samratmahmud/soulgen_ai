import Link from "next/link";
import React from "react";
import InputBox from "./InputBox";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface sizeProps {
  size?: "Desktop" | "Mobile";
}

function SingupFile(props: sizeProps) {
  const {size = "Desktop"} = props;
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
        className={`${
          size === "Desktop"
            ? "text-sm font-medium text-slate-950 py-2.5 px-4 bg-gray-200 rounded-full hover:bg-slate-100 duration-300 focus:scale-90"
            : "text-sm font-medium text-slate-950 py-2.5 px-12 bg-gray-200 rounded-full hover:bg-slate-100 duration-300 focus:scale-90"
        }`}
      >
        Sing in
      </Link>
      {isOpen && (
        <div className="duration-300 absolute md:w-[420px] w-[250px] right-0 translate-y-4 md:translate-x-0 translate-x-[21%] bg-gray-100 rounded-lg md:py-5 py-3 md:px-4 px-2">
          <div className="md:text-xl text-2xl mb-6 font-semibold">Sign Up</div>
          <div>
            <div className="flex md:flex-row flex-col gap-2 mb-2">
              <InputBox className="" type="text" placeholder="First Name" />
              <InputBox className="" type="text" placeholder="Last Name" />
            </div>
            <div className="mb-2">
              <InputBox type="email" placeholder="Enter your email or number" />
            </div>
            <div className="mb-2">
              <InputBox type="password" placeholder="Enter New Password" />
            </div>
          </div>
          <div className="mb-2">
            <div className="text-md font-semibold mb-1">Date of birth</div>
            <div className="flex gap-1.5">
              <InputBox type="number" placeholder="DD" />
              <InputBox type="number" placeholder="mm" />
              <InputBox type="number" placeholder="yyy" />
            </div>
          </div>
          <div className="mb-7">
            <div className="text-md font-semibold mb-1">Gender</div>
            <div className="flex md:gap-1.5 gap-0.5">
              <InputBox
                sizes="others"
                title="Female"
                type="radio"
                name="gender"
                id="radio"
              />
              <InputBox
                sizes="others"
                title="Male"
                type="radio"
                name="gender"
                id="radio"
              />
              <InputBox
                sizes="others"
                title="others"
                type="radio"
                name="gender"
                id="radio"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="md:w-1/2 text-md font-semibold text-white md:py-2 py-1 px-8 bg-green-600 hover:bg-green-500 duration-300 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingupFile;
