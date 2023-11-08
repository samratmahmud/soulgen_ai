import Link from "next/link";
import React from "react";
import InputBox from "../template/InputBox";

interface sizeProps {
  size?: "Desktop" | "Mobile";
}

function LoginFile(props: sizeProps) {
  const {size = "Desktop"} = props;
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
        className={`${
          size === "Desktop"
            ? "text-sm font-medium text-white py-2.5 px-4 bg-slate-300/10 rounded-full hover:bg-slate-800 duration-300"
            : "text-sm font-medium text-white py-2.5 px-12 bg-slate-300/10 rounded-full hover:bg-slate-800 duration-300"
        }`}
      >
        Log in
      </Link>
      {isOpen && (
        <div className="duration-300 absolute md:w-[300px] w-[200px] right-0 translate-x-[17%] md:translate-x-0 translate-y-5 bg-gray-100 rounded-lg py-5 md:px-4 px-1.5">
          <div className="flex flex-col gap-3 mb-3">
            <InputBox type="email" placeholder="Enter your email or number" />
            <InputBox type="password" placeholder="Enter your password" />
            <button className="text-md font-semibold text-white py-1.5 px-6 mt-2 bg-blue-600 hover:bg-blue-700 duration-300 rounded-lg w-full">
              Log in
            </button>
          </div>
          <Link
            href=""
            className="text-md text-blue-600 flex justify-center hover:underline"
          >
            Forgotten password?
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginFile;
