import React from "react";


const CartContainer =(props)=> {

    return (
      <div className="CartContainer">
        <h2>{"Available options"}</h2>
        {props.children}
      </div>
    );
  }


export default CartContainer;
