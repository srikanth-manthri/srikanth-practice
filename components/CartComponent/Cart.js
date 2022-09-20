import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import {decrementAction,deleteAction,incrementAction}from "../../Redux/Action"
import Stripe from "./Stripe";

function Cart(props) {
  const cartData =useSelector(state=>state.cartList)
  console.log(cartData)
const dispatch =useDispatch();

let totalPrice = 0;

cartData.forEach(cartLogo);
function cartLogo(logo) {
  console.log(totalPrice,"totalprice",logo.price,logo.quantity)

  console.log(logo.price,logo.id,"saaave header")
  totalPrice = totalPrice + logo.price * logo.quantity  ; 
  console.log(totalPrice,"totalprice",logo.price,logo.quantity)
}
 const [card,setCard]=useState(false);
  return (
    <div>
    {card?<Stripe/>:
    <div className="cart-wrapper noselect">
      
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div>
      <div className="cart-list">
      {cartData.map((item, index) => (
           
        <ul>
     
            <li className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} width="100" height="50" alt="cart item" />
              </div>
              <div className="cart-item-name">
                <span>{item.title} </span>
              </div>
              <div className="cart-item-qty"> 
                {item.quantity > 1 ? (
                       
                   <span onClick={()=>{dispatch(decrementAction(item))}}> 
                  <FontAwesomeIcon icon={["fas", "minus"]} />
                 </span> 
                 ) : (
                  <span onClick={()=>{dispatch(deleteAction(item))}} className="cart-delete-item">
                    <FontAwesomeIcon icon={["far", "trash-alt"]} />
                  </span>
                 )}
                <input type="number" value={item.quantity}  /> 
                 {/* <span onClick={()=>{dispatch(incrementAction(item.id))}}>  */}
                 <span onClick={()=>{dispatch(incrementAction(item))}}> 
                  <FontAwesomeIcon icon={["fas", "plus"]} /> 
                </span> 
                
              </div> 
              <div className="cart-item-price">{item.price*item.quantity}</div>
            </li>
         
        </ul>
        ))}
      </div>
      <div className="cart-checkout">
        <div className="cart-total">
          <h4>Total :</h4>
           <span>${totalPrice}</span>
          
        </div>
        <div className="cart-shipping">
          <h4>Shipping :</h4>
          <span>Free Shipping</span>
        </div>
        <div className="cart-checkout-button">
          <button onClick={()=>setCard(true)}>Proceed to Checkout</button>
        </div>
      </div>
      </div>
    }
    </div>
    
  );
}

export default Cart;
