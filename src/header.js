import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import logo from './postcard/bosch_logo.jpg'
import './postcard/header.scss'

const header=(props)=> {
    let signup=false
    //   console.log(props)
      if(props.location.pathname==='/'|| props.location.pathname==='/signup'){
          signup=true
      }else{signup=false}

      let welcome=(
        <h3>Welcome {props.user}</h3>
      )
      let nav=(
          <div className="signup">
          <Link className="h3" to={{pathname:'/'}}>Signin</Link>
          <Link className="h3" to={{pathname:'/signup'}} >Singup</Link>
          </div>
      )
    return (
        <header >
            <img src={logo} alt="Bosch Logo"></img>

            <h1>Forum Feed</h1>

            {signup? nav:welcome }
        </header>
    )
   
};

export default withRouter(header);