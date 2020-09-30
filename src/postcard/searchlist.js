import React from "react";

const List = (props) => {
    
        // console.log(props)
        return(
            props.list.map((list,i)=>{
                return(
                    <div key={i}>
                    <L search={props.search} id={list.SESSION_ID} sub_topic={list.SUB_TOPIC}/>
                    {/* <span class="tooltiptext">{list.SUB_TOPIC}</span> */}
                    </div>
                )
            })        
    )
}

const L=(props)=>{
    return(
        <li   onClick={()=>{props.search(props.id)}} >{props.sub_topic} </li>
    )
}
export default List;