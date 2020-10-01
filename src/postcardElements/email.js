import React, { useState } from 'react'
import axios from 'axios'
import ReactTooltip from "react-tooltip";

import Loading from '../loading/loading'

const Email=(props)=>{

    const [loading,setLoading]=useState(false);
    let sendEmail=()=>{
        setLoading(true)
        axios.get('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/admin/publishagenda?session_id='+props.session_id)
        .then(result=>{
          setLoading(false)
        })
    }
    return(
        <div className="admin-notify">
        <i data-tip data-for="emailTip" className="boschicon-bosch-ic-mail" onClick={sendEmail}></i>
          <ReactTooltip id="emailTip" place="top" effect="solid">
                Email Subscribers
          </ReactTooltip>
          {loading? <Loading/>:null}
      </div>
    )
}

export default Email