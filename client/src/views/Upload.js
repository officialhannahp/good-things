import React, { useState } from 'react'
import JewelryForm from '../components/JewelryForm';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import FileUpload from '../components/FileUpload'



const Upload = () => {
    const [jewelry, setJewelry] = useState({
        name: "",
        price: "",
        desc: "",
    });



    const changeHandler = e => {
        setJewelry({
            ...jewelry, [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/jewelry`, jewelry)
            .then (response => {
                const {message, results} = response.data;
                if(message === "success"){
                    navigate(`/`);
                } else {
                    for(const key in results.errors){
                    }
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>New Product</h2>

            <FileUpload />

            <JewelryForm 
                changeHandler = {changeHandler}
                submitHandler ={submitHandler}
                jewelry = {jewelry}
                action = "Add Product"
            />

        </div>
    )
}

export default Upload
