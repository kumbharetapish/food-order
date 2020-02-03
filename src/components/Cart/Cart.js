import React from "react";

const Cart = props => {
  return (
    <div className="cartWrapper" key={props.id} onClick={props.click}>
      <img src={props.src} alt={props.name} />
      <h5>{props.name}</h5>
      <strong>{"$" + props.price}</strong>
    </div>
  );
};

export default Cart;
