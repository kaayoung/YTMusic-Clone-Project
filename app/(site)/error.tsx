"use client";
import ErrorMessage from "@/components/ErrorMessage";
// error 페이지는 무조건 client component 로 해야함

import React from "react";

const error = () => {
  return <ErrorMessage />;
};

export default error;
