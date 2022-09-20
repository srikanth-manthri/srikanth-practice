
const intialState = {
    cartList: [],
    login: [],
    signUp: [],
    otp: [],
    totalQuantity: 0,
    allProducts: [],
    singleProduct: [],
    sortingProducts: [],
    
  
  }
  const rootReducer = (state = intialState, action) => {
    const { type, payload } = action
    switch (type) {
      case "CART_LIST":
        const qnt={quantity:1};
        return { ...state, cartList: [...state.cartList, Object.dassign(payload,qnt)],
          
        };
  
      case "CART_INCRIMENT":
        console.log(payload, "hhhhhhhhhhhhhhhhhh")
        return {
          ...state,
          cartList: state.cartList.map((product) =>
            product.productId === payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      case "CART_DECREMENT":
        return {
          ...state,
          cartList: state.cartList.map((product) =>
            product.productId === payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
        };
  
      case "CART_DELETE":
        return {
          ...state,
          cartList: state.cartList.filter((cart) => cart !== payload),
        };
  
      case "LOGIN":
        return { ...state, login: payload };
      case "REGISTER":
        return { ...state, signUp: payload };
      case "OTP":
        return { ...state, otp: payload };
  
      case "SORTING_ITEM":
        return { ...state, sortingProducts: payload }
  
      default:
        return state
    }
  
  
  }
  
  export default rootReducer;
  