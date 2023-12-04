import React from "react";
import jsonData from "../datas/Navbar.json";

const Navbar = () => {
  const items = jsonData["items"];

  return (
    <div className="div">
      {items.map((item) => (
        <ul className="div-2" key={item["id"]}>
          <li>
            <span className="text-wrapper">{item["name"]}</span>
            <img
              className="shopping-cart"
              alt="Shopping cart"
              src="https://c.animaapp.com/5RsD9vNN/img/shopping---cart-1.svg"
            />{" "}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Navbar;
