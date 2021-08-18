import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import css from '../css/ProductDetail.css'

const ProductDetail = props => {

    const { cart, setCart } = props;

    const {id} = props;

    const [jewelry, setJewelry] = useState({
        name: "",
        price: "",
        desc: "",
        imgUrl: ""
    });
    
    const addToCart = (jewelry) => {
        console.log("we are in addToCart");
        setCart([...cart, jewelry]);
    }

    useEffect( () => {
        axios.get(`http://localhost:8000/api/jewelry/${id}`)
            .then(response => {
                if (response.data.results){
                    console.log(response.data.results)
                    setJewelry(response.data.results)
                }
                else {
                        console.log(response.data)
                        navigate("/");
            }})
            .catch(err => console.log(err));
    }, [id])

    return (
        <>
            <div className="container">
                <img src={jewelry.imgUrl} className="detailpic"></img>
                <div className="detail">
                    <h1 className="detailtext">{jewelry.name}</h1>
                    <h2 className="detailtext">${jewelry.price}</h2>
                    <p className="detailtext">{jewelry.desc}</p>
                <button onClick={() => addToCart(jewelry)} className="cartbutton">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetail