import '../App.css';
import Draggable from 'react-draggable';
import resumeIcon from '../img/PDF_file_icon.png';
import resume from '../Docs/Resume Isaiah.pdf'
import React from "react";

function Resume() {
    const handleDoubleClick = () => {
        window.open(resume, 'Isaiah Daiz\'s Resume');
    }


    return (
        <>
            <Draggable defaultClassName={"draggable-icon"} defaultPosition={{ x: 25, y: 75 }}>
                <div onDoubleClick={handleDoubleClick}>
                    <img id="icon" src={resumeIcon} alt="Resume"></img>
                    <p>Resume</p>
                </div>
            </Draggable>
        </>
    )
}
export default Resume;