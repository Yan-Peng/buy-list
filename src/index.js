import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Footer from "./footer";
import "./css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="box">
      <Nav />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
