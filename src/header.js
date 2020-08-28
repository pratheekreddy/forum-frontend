import React from 'react'
import logo from './postcard/bosch_logo.jpg'
import './postcard/header.css'

const headers = (props) => {

    return (
        <header className="header">
            <img src={logo} alt="Bosch Logo"></img>

            <h1>Forum Feed</h1>

            <h3>Welcome {props.user}</h3>
        </header>
    )
};

export default headers;