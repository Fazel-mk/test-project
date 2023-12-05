// MainContent.js
import React from "react";
import ImageSlider from "../maincontent/ImageSlider";
import Best from "../maincontent/Best";
import Articles from "../maincontent/Articles";

import "./Maincontent.css";
const MainContent = () => {
  return (
    <React.Fragment>
      <ImageSlider />
      <Best />
      <div className="container">
        <img className="banner" src="/banner.png" alt="" />
      </div>
      <Articles />
      <div className="container">
        <img className="banner" src="/banner2.png" alt="" />
      </div>
    </React.Fragment>
  );
};

export default MainContent;
