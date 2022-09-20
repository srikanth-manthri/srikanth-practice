import React from 'react';
import ProductCard from './ProductCard';
import data from "../../data";
import { useLocation } from 'react-router-dom';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function SearchedProduct(props){
  let query = useQuery();
  let searchKeyword=query.get("keyword");
  return(
<div className="searched-product-list">
<h2>{searchKeyword}</h2>
<div className="related-products-card">
{data.products.map((product) => (
            <ProductCard product={product} />
          ))}
</div>
</div>
  );
}

export default SearchedProduct;