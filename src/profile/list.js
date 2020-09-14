import React, { useState } from 'react'
// import axios from 'axios';
import { withRouter } from 'react-router-dom'

import './list.scss'

const List = (props) => {
    const [display, setDisplay] = useState(false);
    let type = localStorage.getItem('type')

    let signout = () => {
        localStorage.clear();
        // console.log(props)
        props.history.push({ pathname: '/login' });
        setDisplay(false)
    }

    let profile = () => {
        props.history.push({ pathname: '/profile' });
        setDisplay(false)
    }

    let approve = () => {
        props.history.push({ pathname: '/aprove' });
        setDisplay(false)
    }

    let postAgenda = () => {
        props.history.push({ pathname: '/postagenda' });
        setDisplay(false)
    }

    let home=()=>{
        props.history.push({ pathname: '/' });
        setDisplay(false)
    }

    let admin = (<div>
        <p onClick={approve}>Approve users</p>
        <p onClick={postAgenda}>Post Agenda</p>
    </div>
    )

    let list = (<div className="dropdown-content">
        <p onClick={home}>Home</p>
        <p onClick={profile}>Your Profile</p>
        {type === 'A' ? admin : null}
        <p onClick={signout}>Sign out</p>
    </div>)

    let toggle = () => {
        setDisplay(!display)
    }
    return (
        <div className="dropdown">
            <i className="boschicon-bosch-ic-user" onClick={toggle}></i>
            {display ? list : null}
        </div>
    )
}

export default withRouter(List);