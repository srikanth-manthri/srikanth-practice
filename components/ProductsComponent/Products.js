import React from "react";
import data from "../../data";
import ProductsHeader from "./ProductsHeader";
import ProductCard from "./ProductCard";

function Product(props) {
  return (
    <div className="products">
      <ProductsHeader />
      <div className="products-container">
        <div className="product-cards" dir="ltr">
          {data.products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
      <div className="related-products">
        <div className="related-products-header">
          <h1>Related Products</h1>
        </div>
        <div className="related-products-card">
          {data.products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
