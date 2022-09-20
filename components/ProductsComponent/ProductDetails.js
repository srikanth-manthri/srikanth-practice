import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import data from "../../data";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Redux/Action";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage(props) {

  let productIndex = props.match.params.id ? props.match.params.id-1 : 0;
  const [cart, setCart] = useState([{
}]);
// const showData = useSelector(state => state.sortingProducts)
// console.log(showData,"productttttttttttttttttt")

  const cartData =useSelector(state=>state.cart)
  console.log(cartData,"saaaa qnt")
const [loading,setLoading]=useState(true)
  const dispatch=useDispatch();
  const {id}=useParams()
  const getOneProduct=async()=>{
   
    axios.get(`https://fakestoreapi.com/products/${id}`)
    
    .then(res=>{
      console.log(res.data)
      
      setCart(res.data)
      setLoading(false)
    })

  }
  console.log(cart,"single usestate")
  useEffect(()=>{
    getOneProduct();
  },[])
  console.log(id)

 console.log(cart[id])
 console.log(cart)

  const handleCartSubmit = (e,products) => {
    
  
    dispatch(addCart(cart))
  
  };

  
  return (
    
    <div className="ProductPage">
       <div>
      <div className="products-hero-design">
        <div className="ripple-design">
          <div className="ripple-circle very-small shade0"></div>
          <div className="ripple-circle small shade1"></div>
          <div className="ripple-circle medium shade2"></div>
          <div className="ripple-circle large shade3"></div>
        </div>
        <div className="products-nav">
          <p className="breadCrump">
            <span className="home-link">Home</span> / Product Details
          </p>
          <h3 className="title">Product Details</h3>
          <div className="previous-next-buttons">
          <div   className="left-arrow">
              <FontAwesomeIcon icon={['fas','chevron-left']} size="2x" aria-hidden="true"/>
            </div>
            
            <div  className="right-arrow">
       <FontAwesomeIcon icon={['fas','chevron-right']} size="2x" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </div>


      <div className="product-details-container">
        <div className="product-details-card">
          <div className="product-detail-left-container">
            <div className="product-details-name">
              <p>{cart?.title}</p>
            </div>
            <div className="product-details-description">
              <p>{cart?.description}</p>
            </div>
            <div className="product-image-thumbnails">
            
            </div>
          </div>
          <div className="product-detail-middle-container">
            <div className="product-image-gallery">
            
              <img
              // ref={imageRef}
                src={cart?.image}
                // width="150"
                // height="63"
                width="265"
                height="111"
                alt="product-gallery"
              />
            </div>
            <div className="product-detail-price">
              <span>${cart?.price}</span>
            </div>
          </div>
          <div className="product-detail-right-container">
           
            <div className="product-detail-add-to-cart-btn">
              <button onClick={handleCartSubmit} >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        related products
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
      </div>
     
    
    </div>
  );
}

export default ProductPage;
