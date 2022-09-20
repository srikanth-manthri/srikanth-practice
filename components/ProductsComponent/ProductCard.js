import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProductCard({ product }) {
  return (
    <div className="product-card" key={product._id}>
      <div className="product-header">
        <Link to={"/shop/" + product._id}>
          <div className="product-maximize">
            <FontAwesomeIcon icon={["fas", "expand-arrows-alt"]} size="2x" />
          </div>
        </Link>
        <Link to="/cart">
          <span className="product-add-to-cart">
            <FontAwesomeIcon icon={["fas", "shopping-bag"]} />
          </span>
        </Link>
      </div>
      <div className="product-image">
        <div
          className="background-design"
          style={{ background: product.colors[0] }}
        >
          <div className="circle"></div>
        </div>
        <figure>
          <img src={product.image} alt="product-img" width="220" height="93" />
        </figure>
      </div>
      <div className="product-name">
        <p>{product.name}</p>
      </div>
      <div className="product-price">{product.price}</div>
    </div>
  );
}

export default ProductCard;
