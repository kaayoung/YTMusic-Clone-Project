"use client";

import React from "react";
import { BarLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader width={"100%"} color="red" />
    </div>
  );
};

export default LoadingBar;
