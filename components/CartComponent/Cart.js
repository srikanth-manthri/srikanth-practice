import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import data from "../../data";
import { useSelector } from 'react-redux'

function Cart(props) {
  const [quantity, setQuantity] = useState(1);

const cart = useSelector((state) => state.cart)
  

  return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
      </div>
      <div className="cart-list">
        <ul>
          {data.products.map((item, index) => (
            
            <li className="cart-item">
              <div className="cart-item-img">

                <img src={item.image} width="90" height="38" alt="cart item" />
              </div>
              <div className="cart-item-name">
                <span>{item.name} </span>
              </div>
              <div className="cart-item-qty">
                {quantity > 1 ? (
                  <span onClick={() => setQuantity(quantity - 1)}>
                    <FontAwesomeIcon icon={["fas", "minus"]} />
                  </span>
                ) : (
                  <span className="cart-delete-item">
                    <FontAwesomeIcon icon={["far", "trash-alt"]} />
                  </span>
                )}
                <input type="number" value={quantity} disabled />
                <span onClick={() => setQuantity(quantity + 1)}>
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
              </div>
              <div className="cart-item-price">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-checkout">
        <div className="cart-total">
      
<div className="cart__left">
  <div>
    
    {cart?.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
      />
    ))}
  </div>
</div>
          <h4>Total :</h4>
          <span>$1008</span>
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
