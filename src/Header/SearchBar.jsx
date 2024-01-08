import React from "react";
import "./SearchBar.css";
import Hamburger from "./Hamburger";
import "./Hamburger.css";

const SearchBar = () => {
  return (
    <div>
      <div className="search-bar">
        <div>
          <button className="button">جستجو</button>
        </div>
        <input type="text" placeholder="نام محصول , کارخانه را واردکنید" />
        <img className="logo" src="/logo.png" alt="" />
        <Hamburger className="hamburger-menu" />
      </div>
    </div>
  );
};

export default SearchBar;
