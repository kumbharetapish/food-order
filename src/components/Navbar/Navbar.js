import React, { Component } from "react";

import Navigation from "../Navigation/Navigation";

class Navbar extends Component {
  render() {
    return (
      <div className="navWrapper">
        <div className="logoWrapper">
          <h2 className="logoFirst">{"FOOD."}</h2>
          <h2 className="logoSecond">{"LOGO"}</h2>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Navbar;
