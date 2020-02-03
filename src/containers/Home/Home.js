import React, { Component } from "react";

import MainBtn from "../../components/MainBtn/MainBtn";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import "./index.css";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="headingWrapper">
          <img
            className="homePageImg"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT86SGMorQozA9A5Zjezypyyn3cM_nQ8so7ypQwvOPDaku2pHlP"
            }
            alt="Homepage"
          />
          <h2>
            {"Have no time to for prepare"} <strong>{"food "}</strong>
            {"?"}
          </h2>

          <p>
            {
              "Choose one of our plans, enter delivery time and enjoy delicious food without leaving your home! "
            }
          </p>

          <MainBtn BtnName="Order Now"></MainBtn>
          <SocialMedia />
        </div>
      </div>
    );
  }
}

export default Home;
