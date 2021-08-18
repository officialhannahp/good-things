import React from 'react'
import logo from '../images/logo.png';
import icon from '../images/icon.png'
import {Link} from '@reach/router';
import css from '../css/TopHandler.css'
import ig from '../images/ig.png'


const TopHandle = () => {


    return (
        <div>
            <a href="https://www.instagram.com/hellogoodgroup/"><img src={ig} className="ig" /></a> 
            {/* <Link to="/cart"> <img src={icon} alt="icon" className="cart" /> </Link> <br/> */}
            <Link to="/cart"> <img src={icon} alt="icon" className="cart" /> </Link> <br/>
            <Link to="/" className="link"><img src={logo} alt="logo" className="logo" /></Link>

            <div className="menu">
                <Link to="/" className="name">Home</Link>
                <Link to="/shop" className="name">Shop</Link>
                <Link to="/about" className="name">About Us</Link>
                <Link to="/contact" className="name">Contact</Link>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default TopHandle
