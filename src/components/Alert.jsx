import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import { popOut } from "../utils/animatedVariants";

const Alert = ({ type, text }) => {
  return (
    <AnimatedComponent
      variants={popOut}
      exit="exit"
      className="absolute left-10 right-0 top-16 flex items-center justify-center">
      <div
        className={`flex items-center rounded-full p-2 leading-none text-indigo-100 lg:inline-flex
        ${type === "danger" ? "bg-red-800" : "bg-blue-800"}`}
        role="alert">
        <p
          className={`mr-3 flex rounded-full px-2 py-1 font-amatic text-lg font-bold
          ${type === "danger" ? "bg-red-500" : "bg-blue-500"}`}>
          {type === "danger" ? "Failed" : "Success"}{" "}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </AnimatedComponent>
  );
};

export default Alert;
