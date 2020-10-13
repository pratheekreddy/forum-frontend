import React from "react";
import './popup.css'

const popup =(props)=> {
    let onFormSubmit=()=>{

    }
    let onChange=(e)=>{
        this.setState({file:e.target.files[0]});
    }
      return (  
        <div className='popup'>
          <div className='popup_inner'>
          <button className="button" onClick={props.toggle}>&times;</button>
          <form onSubmit={onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {onChange} />
                <button type="submit">Upload</button>
            </form>
          </div>
        </div>
      );
  }

export default popup