import data from "../data";

const initialState = {
  cart: [],
};

export const Reducer = (state = initialState, action) => {
  console.log(action,"actionis work");

  switch (action.type) {
    case "Add_To_Cart":
      console.log(action.payload, "data is  coming");
      return {
        ...state,
        cart: [...state.cart, Object.assign(data.products[action.payload] ,{ quantity: 1 })],
      };

    case "INCREMENT":
      console.log(action.payload, "data is  increse");
      let Inces = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      return { ...state, cart: Inces };

    case "DECREMENT":
      console.log(action.payload, "data is  decrese");
      let Dinces = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
          };
        }
        return product;
      });
      return { ...state, cart: Dinces };

    // // removeItem: (state, action) => {
    // //   const removeItem = state.cart.filter((item) => item.id !== action.payload);
    // //   state.cart = removeItem;
    // }
    // case "DELETE":
    //   console.log(action.payload, "data is  deLeTe");
    //   let Delete = state.cart.map((product) => {
    //     if (product.id !== action.payload.id) {
    //       return { ...product, quantity: product.quantity - 1 };
    //     }
    //     return product;
    //   });
    //   return { ...state, cart: Delete };

    case "DELETE":
    let deleteItem = [
      ...state.cart.filter((item, index) => item != action.payload)
    ]
    
    return {
        ...state,
        cart:deleteItem
       
      }



  }
};

// case 'DELETE':

//   console.log( action.payload, 'data is  delete')
//   let Delete = state.cart.map((product) => {
//          if ( product.id === action.payload.id)   {
//       //    return { ...product, quantity: item.quantity  - 0 };
//       return {   ...state, Delete:action. Payload }
//   }
//          return product
//         })
//       // return {   ...state, Delete:action. Payload }

//  default:{
//    return state
//  }

// }

// }
