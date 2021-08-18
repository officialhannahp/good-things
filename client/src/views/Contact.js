import React from 'react'
import letters from '../images/letters.jpg'
import css from '../css/contact.css'
import { Link } from '@reach/router'

const Contact = () => {
    return (
        <div className="contactcontainer">
            <img src={letters} className="letters" />
            <div className="text">
                {/* <p className="heart">💌</p> */}
            <p className="q">Have a question? <br/>Please feel free to contact us.</p> <p className="contact">You can email us directly at <br/>customercare@goodgroup.com. <br/>
                You can also give us a call at <br/>206.000.0000. <br/>We are available <br/>Monday-Friday 9am-5pm PST.</p>
            </div>
        </div>
    )
}

export default Contact
