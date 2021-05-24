import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
export default () =>{
    const[Title, setTitle] = useState("")
    const[Price, setPrice] = useState("0.00")
    const[Description, setDescription] = useState("")
    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', {
            Title,
            Price,
            Description
        })
            .then(res =>console.log(res))
            .catch(err=>console.log(err))
    }
    return(
        <>
            <form onSubmit = {onSubmitHandler}>
                <label>Title</label>
                <input type="text" name="Title" id="Title" onChange={(e)=>setTitle(e.target.value)} value = {Title}/>
                <label>Price</label>
                <input type="text" name="Price" id="Price"onChange={(e)=>setPrice(e.target.value)} value = {Price} />
                <label>Description</label>
                <input type="text" name="Description" id="Description" onChange={(e)=>setDescription(e.target.value)} value = {Description}/>
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

