import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //TODO CONVERT TO RCC 
  // state = {
  // visible: true
  // }
  // render(
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <Link
        to="/"
        className="btn btn-dark btn-sm"
      >
        <i className="fas fa-caret-square-left fa-2x"></i>
      </Link>
      <span className="navbar-brand mb-0 h1 mx-auto">LyricFinder</span>
    </nav>
  );
};


export default Navbar;
