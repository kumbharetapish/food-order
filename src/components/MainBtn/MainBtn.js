import React, { Component } from "react";

class MainBtn extends Component {
  render() {
    return (
      <div className="mainBtn">
        <button onClick={this.props.add}>{this.props.BtnName}</button>
      </div>
    );
  }
}

export default MainBtn;
