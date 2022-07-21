import React, { Component } from "react";
import { connect } from "react-redux";
class ModalCart extends Component {
  renderCart = () => {
    return this.props.carts.map((cartItems, index) => {
      return (
        <tr key={index}>
          <td>{cartItems.maSP}</td>

          <td>
            <img
              src={cartItems.hinhAnh}
              alt={cartItems.tenSP}
              style={{ width: 100 }}
            />
          </td>

          <td>{cartItems.tenSP}</td>

          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.upAndDownCart(cartItems.maSP, true);
              }}
            >
              +
            </button>
            {cartItems.soLuong}

            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.upAndDownCart(cartItems.maSP, false);
              }}
            >
              -
            </button>
          </td>

          <td>{cartItems.donGia.toLocaleString()}</td>

          <td>{(cartItems.soLuong * cartItems.donGia).toLocaleString()}</td>

          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteToCart(cartItems.maSP);
              }}
            >
              Xóa giỏ hàng
            </button>
          </td>
        </tr>
      );
    });
  };

  renderCountCarts = () => {
    return this.props.carts
      .reduce((countCost, cartItems, index) => {
        return (countCost += cartItems.soLuong * cartItems.donGia);
      }, 0)
      .toLocaleString();
  };

  render() {
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" style={{ minWidth: 1000 }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>Tổng tiền</td>
                      <td>{this.renderCountCarts()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Hàm lấy state redux biến đổi thành props của component
const mapStateToProps = (state) => {
  // state là state của tổng ứng dụng chứa các state con (rootReducer)
  return {
    carts: state.stateCart.cart,
  };
};

// Hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    deleteToCart: (maSP) => {
      let action = {
        type: "DELETE_TO_CART",
        maSP,
      };

      dispatch(action);
    },

    upAndDownCart: (maSP, upAndDown) => {
      // upAndDown === true => tăng sản phẩm , upAndDown ===false => giảm sản phẩm
      let action = {
        type: "UP_AND_DOWN",
        maSP,
        upAndDown,
      };

      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);
