import React, { useState } from 'react'
import axios from 'axios'
import ReactTooltip from "react-tooltip";

import Loading from '../loading/loading'

const File=(props)=>{

    let file;
    const [loading,setLoading]=useState(false)
    let onChange = (e) => {
        file = e.target.files[0];
        formSubmit(e);
      }

    let formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('files', file);
        formData.append('session_id', props.session_id);
        formData.append('uploaded_by',localStorage.getItem('name'));
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        };
        setLoading(true)
        axios.post("https://rbei-cloud-foundry-dev-rbei-njs-forum.cfapps.eu10.hana.ondemand.com/file/upload", formData, config)
          .then((response) => {
            // console.log(response)
            setLoading(false)
            if(response.status===200){
            alert(response.data.status);
            }
          }).catch((e) => {
              alert(e.response.data.msg);
          });
      }

    return(
    <div className='upload'>
        <form onSubmit={formSubmit}>
          <i  className="boschicon-bosch-ic-cloud-upload"></i>
          <ReactTooltip id="uploadTip" place="top" effect="solid">
                Upload Attachments
          </ReactTooltip>
          <input data-tip data-for="uploadTip" type="file" name="files" onChange={onChange} />
          <div className="clear"></div>
        </form>
        {loading?<Loading/>:null}
    </div>
    )
}

export default File;