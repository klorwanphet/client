import React from 'react';
import { Link } from '@reach/router'

const ProductList =props =>{
    const {Product}=props
    return(
        <div>
            <p>
                Title: <Link to= {`/product/one/${Product._id}`}>{Product.Title}</Link>
                Price: {Product.Price}
                Description: {Product.Description}
                
            </p>
            
        </div>
    )
}


export default ProductList