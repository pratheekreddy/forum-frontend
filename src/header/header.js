import React /*, { useState }*/ from 'react'
import {withRouter,Link} from 'react-router-dom'
import logo from './bosch_logo.jpg'
import List from '../profile/list'
import './header.scss'

const header=(props)=> {
    // const [signup, setSignup] = useState(false);
    //   console.log(props)
    let signup=true
      if(props.location.pathname==='/login'|| props.location.pathname==='/signup'){
          signup=true
      }else{
          signup=false
        }

      let welcome=(
        <List className='h3'></List>
      )
      let nav=(
          <div className="signup">
          <Link to={{pathname:'/login'}}>Sign in</Link>
          <Link className='blink' to={{pathname:'/signup'}} >Sign up</Link>
          </div>
      )
    return (
        <header >
            <img src={logo} alt="Bosch Logo"></img>

            <h1>RBEI - SbS Forum</h1>

            {signup? nav : welcome }
        </header>
    )
   
};

export default withRouter(header);