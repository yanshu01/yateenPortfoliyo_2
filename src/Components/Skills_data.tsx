
import amazon from "../Assets/icons8-amazon-web-services.svg"
import azure from "../Assets/icons8-azure.svg"
import bootstrap from "../Assets/icons8-bootstrap.svg"
import nextjs from "../Assets/nextjs.1024x617.png"
import css from "../Assets/icons8-css.svg"

import express from "../Assets/icons8-express-js (1).svg"
import figma from "../Assets/icons8-figma.svg"
import firebase from "../Assets/icons8-firebase.svg"
import git from "../Assets/icons8-git.svg"
import html from "../Assets/icons8-html.svg"
import javascript from "../Assets/icons8-javascript.svg"

import mongodb from "../Assets/icons8-mongodb.svg"
import node from "../Assets/icons8-node-js.svg"
import react from "../Assets/icons8-react.svg"

import typescript from "../Assets/icons8-typescript.svg"


function Skills_data (){
    const skills = 
        {
            frontend : [javascript , typescript , react ,  html , css , figma],
            backend : [node , express ],
            databases : [mongodb ,  firebase],
            others : [git ,  bootstrap , amazon , azure , nextjs],
        }
    
    return skills;
}

export default Skills_data;