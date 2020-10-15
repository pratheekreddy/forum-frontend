import React from 'react';

import './feedback.scss'
const About=()=>{
    return(
    <div className='placeholder'>    
        <div className='about'>
            <label>What is SbS Forum ?</label>
            <p>SbS stands for Side-by-Side developments in SAP Cloud platform(CP). SbS is a technique to extend the 
             S/4HANA [On-Prem/Cloud] in SAP Cloud Platform in seamless way. In SbS forum, we discuss and collabrate
             on various technologies, topics, sessions and knowledge sharing among the developers. Everyone in the forum
             can discuss / post a question / explain new concept / try out scenerios / share the feedback and so on.</p>
            <div className='technologies'>
                <label>What are the technologies discussed in SbS Forum?</label>
                <div className='techlist'>
                <ul style={{"border-right": "groove"}}>
                    <p>SAP Cloud Platform Cloud Foundry</p>
                    <p>SAP Cloud Application Programing model (CAP)</p>
                    <p>SAP Cloud SDK</p>
                </ul>
                <ul style={{"border-right": "groove"}}>
                    <p>SAP Cloud Platform Components/Services</p>
                    <p>SAP Cloud Platform Integration</p>
                    <p>Node.js and Java</p>
                </ul>
                <ul>
                    <p>HANA-SQL, SQL Script Performance</p>
                    <p>Bitbucket, GIT, CI/CD, etc</p>
                </ul>
                </div>
            </div>
            
            <div className='contact'>
                <p><b>Any questions? Please feel free to contact:<span style={{"color":"red"}}> SbS Forum:</span></b> Chathia Chandran P (RBEI/BSL7)</p>
                <p><b><span style={{"color":"red"}}>Registration / SbS Forum Portal:</span></b> Katta Pratheek Reddy (RBEI/BSL7), Gautam Krishnan (RBEI/BSL5)</p>
            </div>
        </div>
    </div>
    )
}

export default About;