import '../App.css';
import Draggable from 'react-draggable';
import contactDesktopIcon from '../img/msoeres.dll_14_52-6.png';
import React from "react";

function ContactMeIcon(props) {
    return (
        <>
            <Draggable defaultClassName={"draggable-icon"} defaultPosition={{ x: 25, y: 25 }}>
                <div onDoubleClick={props.showWindow}>
                    <img id="icon" src={contactDesktopIcon} alt="Contact Me"></img>
                    <p>Contact Me</p>
                </div>
            </Draggable>
        </>
    )
}
export default ContactMeIcon;