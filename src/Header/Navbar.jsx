import React from "react";
import jsonData from "../datas/Navbar.json";
import "./Navbar.css";

const Navbar = () => {
  const items = jsonData["items"];

  return (
    <div>
      <div className="Navbar">
        {items.map((item) => (
          <div className="Navbox" key={item["id"]}>
            <div className="Nav-btn">
              <img
                className="shopping-cart"
                alt="Shopping cart"
                src="https://c.animaapp.com/5RsD9vNN/img/shopping---cart-1.svg"
              />
              <span className="NavItems">{item["name"]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
