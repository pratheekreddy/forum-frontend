import React from 'react'
import logo from './postcard/bosch_logo.jpg'
import './postcard/header.css'

const headers = () => {

    return (
        <header>
            <img src={logo} alt="Bosch Logo"></img>
            <h1>Forum Feed</h1>
        </header>
    )
};

export default headers;