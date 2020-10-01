import React from 'react'
import fileDownload from 'js-file-download'
import axios from 'axios'

const download=(props)=> {

    let down=props.down
    const tempName = down[0].split('.');
    // console.log(down)
    let filedown=()=>{
        axios.get('https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/file/download?filename='+down[1],{responseType: 'blob'})
            .then((result)=>{
            // console.log(result)
            fileDownload(result.data, down[0]);
    })
    .catch(e=>{
        alert(e.response.data.msg)
    })
    }
    return(
        
         <li><p target="_blank" rel="noopener noreferrer" onClick={filedown}><span>{tempName[1]}</span>{tempName[0]}</p></li>
    )
}

export default download