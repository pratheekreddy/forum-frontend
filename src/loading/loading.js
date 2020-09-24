import React from "react";
// import loading from '../fonts/loading.gif'
import './loading.css'
const Loading=()=>{
    return(
        // <img className='img' src={loading} alt='loading...'></img>
        // <div className="loader" tabIndex='-2'></div>
        <div className="spinner" tabIndex='-2'>
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    )
}

export default Loading