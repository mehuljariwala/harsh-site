import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ userSelect: "none" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
