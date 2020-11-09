import React , {useState} from 'react';
import axios from 'axios';

import Loading from '../loading/loading'

const APostcard=(props)=>{

    const [loading,setLoading]=useState(false);
    const user=localStorage.getItem('email').toLowerCase();
    const user_style={"fontStyle":"italic","fontSize":"14px"};
    const delet=()=>{
        setLoading(true)
        axios.delete('https://cors-anywhere.herokuapp.com/https://rbei-cloud-foundry-dev-forum-app-srv.cfapps.eu10.hana.ondemand.com/QA/answers/'+props.answer.A_ID)
        .then(r=>{
            setLoading(false);
        }).catch(e=>{
            setLoading(false);
        })
    }

    return(
        <div className='answer'>
            <p><span> A. </span> {props.answer.ANSWER} 
            <span style={user_style}>- {props.answer.USER}</span>
            {user==props.answer.USER.toLowerCase() ? <i onClick={delet} title='delete' className='boschicon-bosch-ic-delete' style={{cursor:'pointer'}}></i> : null}
            </p>
            {loading ? <Loading></Loading> : null}
        </div>
    )

}
export default APostcard;