import React from "react";

const List = (props) => {
    
        // console.log(props)
        return(
            props.list.map((list,i)=>{
                return(
                    <div key={i}>
                    <li  id={list.SESSION_ID} onClick={(i)=>{console.log(i)}} >{list.SUB_TOPIC} </li>
                    {/* <span class="tooltiptext">{list.SUB_TOPIC}</span> */}
                    </div>
                )
            })        
    )
}

export default List;