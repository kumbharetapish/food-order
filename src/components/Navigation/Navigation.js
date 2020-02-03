import React from "react";
import MainBtn from "../MainBtn/MainBtn";
function Navigation(props) {
  return (
    <div className="navigation">
      <a href=""> {"About"} </a>
      <a href=""> {"Our Food"} </a>
      <a href=""> {"About"} </a>
      <MainBtn BtnName="Contact Us" />
    </div>
  );
}

export default Navigation;
