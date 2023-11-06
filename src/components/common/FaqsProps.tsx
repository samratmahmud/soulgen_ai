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
        className={`flex justify-between gap-5 items-center ${
          open ? "mb-4" : ""
        }`}
      >
        <div className="text-lg text-white font-semibold capitalize">
          {name}
        </div>
        <div onClick={handelClick}>
          <img
            src={`${open ? "/images/minac.svg" : "/images/plus icon 1.svg"}`}
            alt=""
          />
        </div>
      </div>
      <div
        onClick={handelClick}
        className="text-md text-white font-light capitalize"
      >
        {`${open ? `${title}` : ""}`}
      </div>
    </div>
  );
}

export default FaqsProps;
