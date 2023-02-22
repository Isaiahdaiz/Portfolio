import React, { useState } from 'react';
import taskIcon from '../img/msinfo32.exe_14_128-7.png';

function AboutMeTask(props) {
    return (
        <div className={`task ${props.isWindowVisible ? 'task-active' : ''}`} onClick={props.toggleWindow}>
            <img id="icon" src={taskIcon} alt="About Me" />
            <p>About Me</p>
        </div>
    );
}

export default AboutMeTask;
