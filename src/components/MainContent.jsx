// MainContent.js
import React from "react";
import ImageSlider from "../maincontent/ImageSlider";
import Best from "../maincontent/Best";
import Articles from "../maincontent/Articles";
import Outro from "./Outro";

import "./Maincontent.css";
const MainContent = () => {
  return (
    <React.Fragment>
      <ImageSlider />
      <Best />
      <div className="container">
        <img className="banner" src="/banner1.svg" alt="" />
      </div>
      <Articles />
      <div className="container">
        <img className="banner" src="/banner2.svg" alt="" />
      </div>

      <Outro />
    </React.Fragment>
  );
};

export default MainContent;
