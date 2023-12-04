import React from "react";
import Header from "./Header/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
