import React from "react";
import jsonData from "../datas/breakingnews.json";

const BreakingNews = () => {
  const items = jsonData["items"];

  return (
    <div className="frame">
      <div className="div">
        {items.map((item) => (
          <div className="div-2" key={item["id"]}>
            <p className="p">
              <span className="text-wrapper">{item["name"]}</span>
              <span className="span"> {item["status"]}</span>
              <span className="text-wrapper">{item["symbol"]}</span>
            </p>
          </div>
        ))}

        <div className="div-wrapper">
          <div className="flexcontainer">
            <p className="text-i">
              <span className="text-wrapper-2">
                اخبار لحظه ای
                <br />
              </span>
            </p>
            <p className="text-i">
              <span className="text-wrapper-3">چهارشنبه ۲۵ آبان ۱۴۰۱</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
