import React from "react";
import jsonData from "../datas/Best.json";

import "./Best.css";

const Best = () => {
  const items = jsonData["items"];

  return (
    <React.Fragment>
      <div className="best">
        <div className="titlebox">
          <div className="besttext">
            <div className="O-title">پرفروش ترین ها</div>
            <div className="best-text">جدیدترین‌های اهن و میلگرد</div>
          </div>
        </div>
        {items.map((item) => (
          <div className="cards" key={item["id"]}>
            <div className="proudact-card">
              <div className="group">
                <div className="overlap-group">
                  <div className="div-3">
                    <img className="element" alt="" src="image1.png" />
                  </div>
                  <div className="bag-wrapper"></div>
                </div>
              </div>
              <div className="wrapper">
                <div className="text-wrapper">{item.name}</div>
              </div>

              <div className="best-wrapper">
                <span className="wrapper-3">{item.price}</span>
                <span className="wrapper-2">{item.currancy}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Best;
