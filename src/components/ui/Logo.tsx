import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <h1 className="ml-20 text-3xl text-white mt-10 font-roboto ">
        Third<span className="logoGradient">space</span>
      </h1>
    </div>
  );
};

export default Logo;
