import React, {useEffect, useState} from 'react'
import ProductForm from '../components/ProductForm'
import axios from 'axios'
import ProductList from '../components/ProductList'
const Main = () =>{
    const [allProducts, setAllProducts]=useState(null)
    const [Product, setProduct]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/Product/all')
        .then(res =>{
            setProduct(res.data);
            setAllProducts(res.data.Product)
        })
    },[])
    return(
        <div>
            <ProductForm/>
            <hr/>
            {
                allProducts ? allProducts.map((item,i)=>{
                    return <ProductList Product = {item} key = {i}/>
                }):""
            }
        </div>
        
    )
}

export default Main