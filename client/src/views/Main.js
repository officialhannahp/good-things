import React, { useState, useEffect } from 'react';
import css from '../css/main.css'
import dog from '../images/dog.jpg'
import couple from '../images/couple.jpg'
import mountain from '../images/mountain.jpg'
import { Link } from '@reach/router'

const Main = () => {


    return (
        <div className="maindiv">
            <div className="dog">
                <img src={dog} className="dogpic" />
                <p className="when">When was the last time you allowed yourself to dream with no limits?</p>
            </div>

            <div className="couple">
                <img src={couple} className="couplepic" />
                <p className="be">Be & do</p>
            </div>

            <div className="mountain">
                <img src={mountain} className="mountainpic" />
                <p className="chaos">Get out there and cause some good chaos</p>
            </div>
            <br/><br/><br/>
            {/* <Link to="/upload" className="upload">Employee only</Link> */}
        </div>
    )
}
export default Main
