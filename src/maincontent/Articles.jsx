import React from "react";
import "./Articles.css";
import jsonData from "../datas/Articles.json";

const Articles = () => {
  const items = jsonData["items"];

  return (
    <div className="Articles">
      <div className="articleTitle">
        <span>آخرین مقالات</span>
      </div>

      <div className="articleCards">
        {items.map((item) => (
          <div className={"card" + item.id} key={item.id}>
            <div className="cardContent">
              <div className="cardText">
                <div className="title">{item.name}</div>
                <p className="cardDetails">{item.text}</p>
              </div>
              <div className="cardPic">
                <img src="./image2.png" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
