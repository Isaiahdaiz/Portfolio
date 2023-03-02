import '../App.css';
import Draggable from 'react-draggable';
import Icon from '../img/PDF_file_icon.png';
import React from "react";

function GithubIcon(props) {
    return (
        <>
            <Draggable defaultClassName={"draggable-icon"} defaultPosition={{ x: 25, y: 75 }}>
                <div onDoubleClick={props.showWindow}>
                    <img id="icon" src={Icon} alt="Resume"></img>
                    <p>Resume</p>
                </div>
            </Draggable>
        </>
    )
}
export default GithubIcon;