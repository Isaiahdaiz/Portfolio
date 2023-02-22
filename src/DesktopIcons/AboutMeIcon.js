import '../App.css';
import Draggable from 'react-draggable';
import AboutMeDesktopIcon from '../img/msinfo32.exe_14_128-5.png';
import React from "react";

function AboutMeIcon(props) {
    return (
        <>
            <Draggable defaultClassName={"draggable-icon"} defaultPosition={{ x: 25, y: 25 }}>
                <div onDoubleClick={props.showWindow}>
                    <img id="icon" src={AboutMeDesktopIcon} alt="Contact Me"></img>
                    <p>About Me</p>
                </div>
            </Draggable>
        </>
    )
}
export default AboutMeIcon;