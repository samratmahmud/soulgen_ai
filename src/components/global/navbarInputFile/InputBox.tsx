import React from "react";

interface InputBoxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  sizes?: "input" | "others";
  title?: string;
}

function InputBox(props: InputBoxProps) {
  const {
    type,
    id,
    placeholder,
    className,
    title,
    sizes = "input",
    ...rest
  } = props;
  return (
    <label
      className={`${
        sizes === "input"
          ? "w-full"
          : "flex items-center justify-between gap-3 w-full text-sm font-medium md:py-2 py-1 md:px-3 px-1.5 border-2 border-gray-300 rounded-md"
      }`}
    >
      <p className="md:text-sm text-xs">{title}</p>

      <input
        className={`${
          sizes === "input"
            ? "w-full border-2 border-slate-200 py-1.5 px-3 rounded-md focus:outline-none focus:border-gray-300 md:font-medium font-normal"
            : ""
        }`}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </label>
  );
}

export default InputBox;
