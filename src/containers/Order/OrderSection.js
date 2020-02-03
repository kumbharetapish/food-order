import React, { Component } from "react";
import MainBtn from "../../components/MainBtn/MainBtn";
import CartContainer from "../../components/cartContainers/CartContainer";
import Cart from "../../components/Cart/Cart";
const cartData = [
  {
    id: 1,
    item_name: "pizza",
    item_preview:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJip3fzEqiVBKsO852sdd17EN4DOWE6HAIclt5BrsIzGpIHaD5",
    item_price: 5.99
  },
  {
    id: 2,
    item_name: "Burger",
    item_preview:
      "https://images.freshop.com/1898839841148240393/5aec8ad23768858ddfaf029ada493a50_large.png",
    item_price: 2.99
  },
  {
    id: 3,
    item_name: "Chicken Pasta",
    item_preview:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSjgnNLQZOEMjQCyb3WEBU7BCmmafFhxUaYCfN45rV8ziXQGNW",
    item_price: 5.96
  },
  {
    id: 4,
    item_name: "Grilled Sandwich",
    item_preview:
      " https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2014/01/veg-grilled-sandwich-recipe-1-500x500.jpg",
    item_price: 4.99
  }
];
class OrderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData,
      addData: [],
      ref: []
    };
  }

  addToCartHandel = i => {
    let newCartDataRef = [...this.state.cartData];

    this.setState({ addData: this.state.ref });
  };

  handleCart = i => {
    let addData = this.state.cartData[i];
    let ref = Object.values(this.state.addData);
    let listAddData =
      this.state.addData !== [] ? ref.push(addData) : (ref = [cartData[i]]);
    this.setState({
      ref: ref
    });
  };
  render() {
    

    return (
      <div className="orderSectionContainer">
        <div id="overlay">
          <CartContainer>
            {this.state.cartData.map((data, i) => {
              return (
                <Cart
                  click={() => {
                    this.handleCart(i);
                    this.addToCartHandel(i);
                  }}
                  id={data.id}
                  src={data.item_preview}
                  name={data.item_name}
                  price={data.item_price}
                ></Cart>
              );
            })}
          </CartContainer>
          <div className="btnWrapper">
            <MainBtn BtnName="Add to Cart" add={this.addToCartHandel}></MainBtn>
            <MainBtn BtnName="Cart Remove"></MainBtn>
          </div>
          <CartContainer>
            {this.state.addData.map(data => {
              return (
                <Cart
                  id={data.id}
                  src={data.item_preview}
                  name={data.item_name}
                  price={data.item_price}
                ></Cart>
              );
            })}
          </CartContainer>
        </div>
      </div>
    );
  }
}

export default OrderSection;
