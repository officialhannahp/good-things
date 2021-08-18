import React from 'react'
import window from '../images/window.jpg'
import css from '../css/about.css'

const About = () => {
    return (
        <div className="div">
            <img src={window} className="pic" />
            <div className="text">
                {/* <p className="eye"> 🧿</p> */}
                <p className="welcome">Welcome to good Group,<br/>
                where we are always good.</p> 
                <p className="para">be good to yourself</p>
                <p className="para">be good to others</p>
                <p className="para">be good for something</p>
            </div>
        </div>
    )
}

export default About
