import React from 'react'
import logo from './postcard/bosch_logo.jpg'
import './postcard/header.css'

const header=()=>{
    return(
        <div>
        <header className="class">
        <img className="img" src={logo} alt="Bosch Logo"></img>   
        </header>
        <h1 className = 'application-name'>Forum Feed</h1>
        </div>
    )
}

export default header