import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Nav/Navigation.js";

function App() {
  return (
    <div className="container">
      <Navigation></Navigation>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
