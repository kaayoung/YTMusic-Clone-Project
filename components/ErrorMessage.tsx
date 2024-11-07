"use client";
// error 페이지는 무조건 client component 로 해야함

import React from "react";
import { GridLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-4 mt-5">
      <GridLoader />
      <div className=" text-red-600 font-semibold">Oops!</div>
      <div>잠시 후 다시 확인해주세요</div>
    </div>
  );
};

export default ErrorMessage;
