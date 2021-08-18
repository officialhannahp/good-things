import React, { useState } from 'react';
import Paypal from '../components/Paypal';
import css from '../css/cart.css'

const Cart = props => {

    const { cart, setCart } = props;


    return (
        <div>
            <div className="cartcontainer">
                { cart.map((cart, i) => 
                <>
                <div className="detailcart">
                    <img src={cart.imgUrl} className="cartpic"></img>
                    <h2 className="carttext">{cart.name}</h2>
                    <h2 className="carttext">${cart.price}</h2>
                    {/* <p className="detailtext">{cart.desc}</p> */}
                </div>
                </>
                )}
            </div>

            <div className="paypalcont">
            <h1 className="checkout">Ready to checkout?</h1>

            <Paypal />
            </div>
        </div>
    )
}

export default Cart
