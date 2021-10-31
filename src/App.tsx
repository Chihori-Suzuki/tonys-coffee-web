import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Menu />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
