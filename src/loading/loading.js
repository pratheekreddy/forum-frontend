import React from "react";
// import loading from '../fonts/loading.gif'
import './loading.css'
const Loading=()=>{
    return(
        // <img className='img' src={loading} alt='loading...'></img>
        <div className="loader" tabIndex='-2'></div>
    )
}

export default Loading