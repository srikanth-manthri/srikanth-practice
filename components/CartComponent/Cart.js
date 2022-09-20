import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import data from "../../data";
import { useDispatch } from 'react-redux';
import { Decrement, Delete, Increment} from "../../Redux/Action";

function Cart(props) {
  // const [prodData,setprodData]  = useState([]);
  
  const prodData= useSelector((state) => state.cart)
  console.log(prodData ,' productdata')

   const dispatch= useDispatch()
   const [quantity, setQuantity] = useState(1);
// const handleIncrease = (productId) => {
//   console.log("complte increares");
//   dispatch(Increment(productId)) ;
// }
// const handleDecrese =(productId) => {
//   console.log("complete decrese");
//   dispatch(Decrement(productId));

// }
// const handleDelete =(productId) => {
//   console.log("complete deleete");
//   dispatch(Delete(productId));

// }


console.log(prodData,"data");
  return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div>
      <div className="cart-list">

        <ul>
        {prodData && prodData.length > 0 && prodData.map((item, index) => (
            //  {((item, index) => (

 
            <li className="cart-item">
              
              <div className="cart-item-img">
                {/* <img src={data.products[item.productId].image} width="90" height="38" alt="cart item" /> */}
                <img src={item.image} width="90" height="38" alt="cart item" />

              </div>
              <div className="cart-item-name">
                <span>{item.name} </span>
              </div>
              <div className="cart-item-qty">
                {item.quantity > 1 ? (
              
                <span  onClick={() => dispatch(Decrement(item))} >
                    <FontAwesomeIcon icon={["fas", "minus"]} />
                  </span>
                ) : (
                  <span className="cart-delete-item">
                    
                    {/* <span  onClick={() =>handleDelete(item.productId.id) } ></span> */}
                    <span onClick={() => dispatch(Delete(item))}> 

                    {/* <span   onClick={() => dispatch(removeItem(id))}> */}
                    <FontAwesomeIcon icon={["far", "trash-alt"]} /> 
                  </span>
                  </span>
                  
                ) }
                  <input type="number" value={item.quantity} disabled />

                  <span onClick={() => dispatch(Increment(item))}>
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                
                
                
                
  
                
              </div>
            
              <div className="cart-item-price">${item.price*item.quantity}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-checkout">
        <div className="cart-total">
       
          <h4>Total :</h4>
          <span>
            {
              prodData && prodData.length > 0 && prodData.map((item)=>{
                return item.price*item.quantity
              })
            }
          </span>

          {/* <div>{prodData.price*prodData.quantity}</div> */}
        </div>
        <div className="cart-shipping">
          <h4>Shipping :</h4>
          <span>Free Shipping</span>
        </div>
        <div className="cart-checkout-button">
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
