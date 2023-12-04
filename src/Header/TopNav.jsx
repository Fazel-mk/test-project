import React from "react";

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
        <div className="div-5">
          <div className="text-wrapper-2">ملزومات ساختمانی</div>
          <div className="div-6">
            <div className="text-wrapper-3">تماس با ما</div>
          </div>
          <div className="text-wrapper-4">درباره تاجران افلاک</div>
        </div>
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
