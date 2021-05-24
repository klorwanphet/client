import React from 'react';
import axios from 'axios';

const ProductList =props =>{
    const {Product}=props
    return(
        <div>
            <p>
                Title: {Product.Title}
                Price: {Product.Price}
                Description: {Product.Description}
                
            </p>
            
        </div>
    )
}


export default ProductList