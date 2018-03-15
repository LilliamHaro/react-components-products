import React, { Component } from 'react';


const ProductCategoryRow = ({category}) => (

	<tr className="tr-category">
        <th colSpan="2">{category}</th>
      </tr>

)

export default ProductCategoryRow