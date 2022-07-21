import React, { Component } from "react";
import {connect} from "react-redux"
class ProductItem extends Component {
  render() {
    let { productProps } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={productProps.hinhAnh}
          className="card-img-top"
          alt={productProps.tenSP}
          style={{ width: 280, height: 300 }}
        />
        <div className="card-body">
          <h5 className="card-title">{productProps.tenSP}</h5>
          <p className="card-text">{(productProps.donGia).toLocaleString()}</p>
          <button
          className="btn btn-success"
          onClick = {()=>{this.props.addingToCart(productProps)}}
          >
            <i className="fa fa-cart-arrow-down"> Add to cart</i>
          </button>
        </div>
      </div>
    );
  }
}

// Hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
  return({
    addingToCart: (product)=> {
      let cartItems = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        donGia: product.donGia,
        soLuong: 1,
      };
      
      // Tạo ra action
      let action = {
        type: "ADDING_TO_CART",
        cartItems
      }

      // Dùng hàm dispatch do redux cung cấp đẩy dữ liệu lên reducer
      dispatch(action);
    }
  });
}

export default connect(null,mapDispatchToProps)(ProductItem);