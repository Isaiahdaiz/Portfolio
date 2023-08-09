import '../App.css';
import Draggable from 'react-draggable';
import icon from '../img/msoeres.dll_14_52-6.png';
import React from "react";

function ContactMeIcon(props) {
    return (
        <>
            <Draggable defaultClassName={"draggable-icon"} defaultPosition={{ x: 25, y: 50 }}>
                <div onClick={props.showWindow}>
                    <img id="icon" src={icon} alt="Contact Me"></img>
                    <p>Contact Me</p>
                </div>
            </Draggable>
        </>
    )
}
export default ContactMeIcon;