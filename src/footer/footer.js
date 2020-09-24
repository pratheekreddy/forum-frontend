import React from 'react'
// import logo from './postcard/bosch_logo.jpg'
import './footer.scss'

const footers = () => {

    return (
        <footer>
        <p>
        <span style={{ float:"left" ,marginLeft:"5px"}}>© Robert Bosch Engineering and Business Solutions Pvt Ltd.</span>
        <span style={{ float:"right",marginRight:"5px" }}>powered by CAP, HANA, React.js</span></p>
        </footer>
    )
};

export default footers;