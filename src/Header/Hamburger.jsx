import React from "react";
import jsonData from "../datas/Hamburger.json";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Hamburger.css";

function Hamburger() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div ref={navRef} className="hamburger-menu">
        {jsonData.items.map((data) => (
          <a key={data.id} href="/#">
            {data.name}
          </a>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes className="icons" />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars className="icons" />
      </button>
    </>
  );
}

export default Hamburger;
