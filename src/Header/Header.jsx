import React from "react";
import "./Header.css";
import BreakingNews from "./BreakingNews";
import TopNav from "./TopNav";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
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
