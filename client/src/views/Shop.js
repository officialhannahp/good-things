import React, { useState, useEffect } from 'react'
import eyenecklace from '../images/eyenecklace.jpeg';
// import serpant from '../images/serpant.jpeg';
import css from '../css/shop.css'
import { Link } from '@reach/router'
import axios from 'axios';

const Shop = () => {

    const [jewelry, setJewelry] = useState([]);

    useEffect(()  => {
        axios.get('http://localhost:8000/api/jewelry/')
            .then ((res) => {
                setJewelry(res.data.results)
            })
            .catch((err) => console.log(err));
    },[])

    return (
        <>
            <div className="products">
                { jewelry.map((jewelry, i) =>
                    <div className="one" key={i}>
                        <Link to={`/jewelry/${jewelry._id}`}><img src={jewelry.imgUrl} className="photo"></img></Link>
                        <Link to={`/jewelry/${jewelry._id}`}><p className="name">{jewelry.name}</p></Link>
                        <Link to={`/jewelry/${jewelry._id}`}><p className="price">${jewelry.price}</p></Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Shop
