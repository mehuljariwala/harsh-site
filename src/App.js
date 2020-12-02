import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <div style={{ userSelect: "none" }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
