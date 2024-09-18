import React from 'react'

import me from "../Assets/file (9).png"
function Intro(){
  return (<>
        <div className="left-sidebar">
            <div className="sidebar-header">
            
            <span className="designation">Front End Web Developer</span>
            </div>  
            <img src={me} alt="yateen sharma" className="me" />
            <h2 className="name">Yateen Sharma</h2>
            <p className="intro-line">Ready to always Work</p>
            <ul className="social-profile">
            <li>
                  <a href='https://www.linkedin.com/in/sharmatheyateen/' target='_blank'>
                    <i className='lab la-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/yanshu01' target='_blank'>
                  <i className='lab la-github'></i>
                  </a>
                </li>
                <li>
                  <a href='mailto:yatinsharma1007@gmail.com' target='_blank'>
                  <i className="las la-envelope"></i>
                  </a>
                </li>
                
            </ul>
            <a className='resume' href='https://docs.google.com/document/d/13ybaVxT-cpmK2M6yZW_r9lLW_0KUY3NPt0eBDtg0n-M/edit?usp=sharing' target='_blank'>
            <i className="las la-file"></i>
             Resume
            </a>
        </div>
    </>)
}

export default Intro;
