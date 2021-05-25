import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = props => {
    const [Product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/one/${props.id}`)
            .then(res => setProduct(res.data.Product))
            .catch(err => console.log(err))
            
    }, [])
    return (
        <div>
            <p>Title: {Product.Title}</p>
            <p>Price: {Product.Price}</p>
            <p>Description: {Product.Description}</p>
        </div>
    )
}


export default Detail
