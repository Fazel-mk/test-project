import React from "react";
import jsonData from "../datas/TopNav.json";

import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="TopNav">
      <div className="div-2">
        <div className="div-wrapper">
          <div className="div-3">
            <div className="text-wrapper">user 12345</div>
            <div className="picture-instance" />
          </div>
        </div>
        <img
          className="shopping-cart"
          alt="Shopping cart"
          src="https://c.animaapp.com/5RsD9vNN/img/shopping---cart-1.svg"
        />
      </div>
      <div className="div-4">
        {jsonData.items.map((data) => (
          <div key={data.id} className="text-wrapper">
            {data.name}
          </div>
        ))}
      </div>
      <div className="frame-wrapper-2">
        <div className="button-wrapper">
          <button className="button">
            <div className="div-7">
              <div className="text-wrapper-5">درخواست مشاوره</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
