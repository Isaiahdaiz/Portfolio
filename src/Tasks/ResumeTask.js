import React, { useState } from 'react';
import taskIcon from '../img/PDF_file_icon.png';

function ResumeTask(props) {
    return (
        <div className={`task ${props.isWindowVisible ? 'task-active' : ''}`} onClick={props.toggleWindow}>
            <img id="icon" src={taskIcon} alt="Resume" />
            <p>Resume</p>
        </div>
    );
}

export default ResumeTask;
