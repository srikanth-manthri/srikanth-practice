import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sorting } from '../../Redux/Action';


function ProductCategory(props){
  useEffect(()=>{
    dispatch(sorting("products")) 
  },[])
const dispatch = useDispatch();
  const  handleSort= (e)=>{
    const target = e.target.value
    dispatch(sorting(target))
  }
return(
  <div className="result-sorting" >
    <select  id="sortigOrder" name="sortigOrder" onChange={handleSort}   >
    <option  value="products">All Products</option>
    <option value="products/category/jewelery">jewelery</option>
    <option  value="products/category/electronics">electronics</option>
    <option value="products/category/men's clothing">men's clothing</option>
    <option value="products/category/women's clothing">women's clothing</option>
    </select>
    </div>
);
}

export default ProductCategory;