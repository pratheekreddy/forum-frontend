import React from "react";

import Postcard from './Postcard'

const postcards=(props)=>{
    return(
        props.session.map((sessions,index)=>{
            return <Postcard 
            title={sessions.TITLE} 
            index={index}
            description={sessions.DESC } 
            date={sessions.DATE}
            key={sessions.ID}
            session_id={sessions.ID}
            topics={sessions.TOPICS}
            files={sessions.FILES}
            showPopup={props.showPopup}
            toggle={props.toggle}
            > </Postcard>
          })
    )
}

export default postcards