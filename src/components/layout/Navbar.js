import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <nav className="navbar navbar-dark bg-dark mb-5 sticky-top">
      <Link
        to="/music"
        className="btn btn-dark btn-sm"
      >
        <i className="fas fa-home fa-2x"
          onClick={refreshPage}></i>
      </Link>
      <span className="navbar-brand mb-0 h1 mx-auto">LyricFinder</span>
    </nav>
  );
};


export default Navbar;

//TURNARY BUTTONS
// import React, { Component } from 'react'
// import { Link } from "react-router-dom";



// export class Navbar extends Component {
//   state = {
//     visiable: true
//   }
//   render() {

//     const switchBtn = this.state.visiable ? 'Hide' : 'Show'

//     return (
//       <nav className="navbar navbar-dark bg-dark mb-5">
//         {this.state.visiable ? <Link
//           to="/"
//           className="btn btn-dark btn-sm"
//         ><i className="fas fa-home fa-2x"></i></Link> : null}
//         <i className="fas fa-caret-square-left fa-2x"
//           onClick={() => {
//             this.setState({ visible: false })
//           }}></i>



//         <span className="navbar-brand mb-0 h1 mx-auto">LyricFinder</span>
//       </nav>
//     )
//   }
// }

// export default Navbar

