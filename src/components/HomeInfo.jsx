import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import AnimatedComponent from "./AnimatedComponent";
import { popOut } from "../utils/animatedVariants";

const InfoBox = ({ text, link, btnText }) => (
  <AnimatedComponent variants={popOut} exit="exit" className="info-box">
    <p className="text-center font-medium sm:text-lg">{text}</p>
    <Link to={link} className="neo-brutalism-orange neo-btn transition hover:scale-105">
      {btnText}
      <img src={arrow} alt="" className="h-4 w-4 object-contain" />
    </Link>
  </AnimatedComponent>
);

const renderContent = {
  1: (
    <AnimatedComponent variants={popOut}>
      <h1 className="neo-brutalism-brown mx-5 px-8 py-4 text-center font-amatic text-xl text-offwhite sm:leading-snug md:text-3xl">
        Welcome to <span className="font-bold text-orange-300">fox</span> island!🦊
      </h1>
    </AnimatedComponent>
  ),
  2: (
    <InfoBox
      text="Discover the unique life and habits of our island's foxes!"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Uncover fascinating facts about our furry residents! "
      link="/facts"
      btnText="Learn More"
    />
  ),
  4: (
    <InfoBox
      text="Have questions or just want to say hello?"
      link="/contact"
      btnText="Get in touch!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
