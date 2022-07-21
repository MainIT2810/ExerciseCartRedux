import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



// Setup State giỏ hàng trên store
const stateCart = {
  cart: [],
};

const ShoppingCartReducer = (state = stateCart, action) => {
  switch (action.type) {
    case "ADDING_TO_CART": {
      let index = state.cart.findIndex(
        (cartItems) => cartItems.maSP === action.cartItems.maSP
      );

      if (index !== -1) {
        state.cart[index].soLuong += 1;
      } else {
        state.cart.push(action.cartItems);
      }

      // cập nhật lại state.cart
      state.cart = [...state.cart];
      return { ...state };
    }

    case "DELETE_TO_CART": {
      let cartUpdate = [...state.cart];
      let index = cartUpdate.findIndex((cartItems => cartItems.maSP === action.maSP));

      if (index !== -1) {
        cartUpdate.splice(index, 1);

      }

      // Cập nhật lại state giỏ hàng để component render lại
      state.cart = cartUpdate;
      return {...state};
    }

    case "UP_AND_DOWN" : {
      let cartUpdate = [...state.cart];
      let index = cartUpdate.findIndex((cartItems)=> cartItems.maSP === action.maSP);

      if(index !== -1) {
        if (action.upAndDown) {
          cartUpdate[index].soLuong += 1;
        }
        else {
          if (cartUpdate[index].soLuong > 1) {
            cartUpdate[index].soLuong -= 1;
          }
          else {
            MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Số lượng tối thiệu là 1!',
            });            
          }
        }
      }

      // Lấy giá trị giỏ hàng cập nhật gán vào state.cart

      state.cart = cartUpdate;
      return {...state};
    }

    default:
      break;
  }
  return { ...state };
};

export default ShoppingCartReducer;
