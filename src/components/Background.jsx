import React from "react";
import "../components/Background.css";
import bgdeskl from "../assets/bg-desktop-light.jpg";
import bgdeskd from "../assets/bg-desktop-dark.jpg";
import bgmobd from "../assets/bg-mobile-dark.jpg";
import bgmobl from "../assets/bg-mobile-light.jpg";

function Background(props) {
  return (
    <div className="backpic-container">
      <picture>
        <source
          srcSet={props.isDarkTheme ? bgdeskd : bgdeskl}
          media="(min-width: 376px)"
        />
        <img
          className="backpic"
          src={props.isDarkTheme ? bgmobl : bgmobd}
          alt="background mountains"
        />
      </picture>
    </div>
  );
}

export default Background;
