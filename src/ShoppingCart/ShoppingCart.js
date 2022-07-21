import React, { Component } from "react";
import ModalCart from "./ModalCart";
import ProductList from "./ProductList";
import {connect} from "react-redux"
class ShoppingCart extends Component {
  renderCounts = () => {
    return this.props.carts.reduce((CountCarts, cartItems, index)=>{
      return(CountCarts += cartItems.soLuong);
    },0).toLocaleString();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="text-right">
          <span
            style={{ width: 17, cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa fa-cart-arrow-down"></i> ({this.renderCounts()}) Giỏ
            hàng
          </span>
        </div>
        <ModalCart
        />
        <ProductList />
      </div>
    );
  }
}

// Hàm lấy state từ redux biến đổi thành props của component
const mapStateToProps = (state) => {
  // state là state tổng của ứng dụng chứa các state con (rootReducer)
  return({
    carts: state.stateCart.cart,
  });
}

export default connect(mapStateToProps)(ShoppingCart)