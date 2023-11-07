import React from "react";

interface InputBoxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  classNalabel?: string;
  sizes?: "input" | "others";
  text?: string;
  label?: string;
}

function InputBox(props: InputBoxProps) {
  const {
    type,
    id,
    placeholder,
    className,
    text,
    label,
    sizes = "input",
    ...rest
  } = props;
  return (
    <div
      className={`${className} ${
        sizes === "input"
          ? "w-full"
          : "flex items-center justify-between gap-3 w-full"
      }`}
    >
      <label htmlFor={id}>{text}</label>
      <input
        className={`${
          sizes === "input"
            ? "w-full border-2 border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:border-gray-400"
            : ""
        }`}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default InputBox;
