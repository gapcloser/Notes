import React from "react";
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
  return (
    <div className="py-6 px-4 sm:px-16 font-extrabold">
      <span className="text-2xl">
        <CgMenuLeft />
      </span>
      <h1 className="text-3xl mt-3">Lists</h1>
    </div>
  );
};

export default Header;
