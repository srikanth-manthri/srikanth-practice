import React from "react";
import ProductCategory from "./ProductCategory";
 function ProductsHeader(props){
return(
  <div className="products-hero-design">
  <div className="ripple-design">
    <div className="ripple-circle very-small shade0"></div>
    <div className="ripple-circle small shade1"></div>
    <div className="ripple-circle medium shade2"></div>
    <div className="ripple-circle large shade3"></div>
  </div>
  <div className="products-nav">
    <p className="breadCrump">
      <span className="home-link">Home</span> / Shop
    </p>
    <h3 className="title">Shop</h3>
    <ProductCategory/>
  </div>
</div>
);
 }

 export default ProductsHeader;