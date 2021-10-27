import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Menu />
    </div>
  );
}

export default App;
