import React from "react";

interface faqsDetails {
  name: string;
  title: string;
}

function FaqsProps(props: faqsDetails) {
  const {name, title} = props;
  const [open, setOpen] = React.useState(false);

  const handelClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <div
        className={`flex justify-between gap-4 items-center ${
          open ? "md:mb-4 mb-1" : ""
        }`}
      >
        <div className="md:text-lg text-md text-white font-semibold capitalize">
          {name}
        </div>
        <div onClick={handelClick} className="flex-shrink-0 cursor-pointer">
          <img
            src={`${open ? "/images/minac.svg" : "/images/plus icon 1.svg"}`}
            alt=""
          />
        </div>
      </div>
      <div
        onClick={handelClick}
        className="md:text-md text-sm text-white font-light capitalize"
      >
        {`${open ? `${title}` : ""}`}
      </div>
    </div>
  );
}

export default FaqsProps;
