import '../App.css';
import Draggable from 'react-draggable';
import contactWindowIcon from '../img/msoeres.dll_14_52-8.png';
import React from "react";


function ContactMe(props) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = 500; // Default width of window
    const elementHeight = 200; // Defult height of window
    const defaultPosition = {
        x: (windowWidth - elementWidth) / 2,
        y: (windowHeight - elementHeight * 2) / 2
    };
    const style = {
        width: elementWidth
      };


    return (
        <Draggable
            handle=".draggable-window .titlebar"
            defaultClassName={"draggable-window"}
            defaultPosition={defaultPosition}>
            <div style={style}>
                <div class="titlebar">
                    <img id="icon" src={contactWindowIcon} alt="Contact Me"></img>
                    <p>Contact Me</p>
                    <div class="minimize">-</div>
                    <div class="maximize">=</div>
                    <div class="close" onClick={props.closeWindow}>x</div>
                </div>
                <div class="content">
                    <h1>Hello</h1>
                    <p>Contact Me</p>
                </div>
            </div>
        </Draggable>
    )
}

export default ContactMe;