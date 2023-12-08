import React from "react";
import BreakingNews from "./BreakingNews";
import TopNav from "./TopNav";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <BreakingNews />
      <div className="header-content">
        <div className="header-group">
          <TopNav />
          <SearchBar />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
