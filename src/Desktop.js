import './App.css';
import Draggable, { DraggableCore } from 'react-draggable';
import contact from './img/msoeres.dll_14_52-6.png';
import React, { useState } from "react";

function Desktop() {
    return (
        <>
            <ContactMeIcon />
            <ContactMePopup />
        </>
    )
}

function ContactMeIcon() {
    return (
        <Draggable defaultClassName={"draggable"} defaultPosition={{ x: 25, y: 25 }}>
            <div>
                <img id="icon" src={contact} alt="Contact Me"></img>
                <p>Contact Me</p>
            </div>
            
        </Draggable>
    )
}

function ContactMePopup() {
    return (
        <Draggable defaultClassName={"draggable"} defaultPosition={{ x: 25, y: 25 }}>
            <div>
                <img id="icon" src={contact} alt="Contact Me"></img>
                <p>Contact Me</p>
            </div>
        </Draggable>
    )
}

export default Desktop;