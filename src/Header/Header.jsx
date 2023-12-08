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
      <TopNav />
      <SearchBar />
      <Navbar />
    </header>
  );
};

export default Header;
