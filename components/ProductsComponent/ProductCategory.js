import React from 'react';

function ProductCategory(props){
return(
  <div className="result-sorting">
  <p>Showing 1-12 of 36 results</p>
  <select id="sortigOrder" name="sortigOrder">
    <option value="defaultSorting">Default sorting</option>
    <option value="newest">Latest</option>
    <option value="ascending">Ascending</option>
    <option value="descending">Descending</option>
  </select>
</div>
);
}

export default ProductCategory;