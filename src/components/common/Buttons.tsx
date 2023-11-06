import React from "react";

interface buttonProps {
  name: string;
  icon: string;
}

function Buttons(props: buttonProps) {
  let {name, icon} = props;
  return (
    <div className="inline-block">
      <div
        role="button"
        className="flex items-center gap-2.5 md:py-5 py-3 md:px-8 px-5 bg-200 hover:bg-300 rounded-full focus:scale-105 duration-300"
        tabIndex={-1}
      >
        <div className="text-white md:text-md text-sm">{name}</div>
        <div>
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
