import React, { useState } from 'react';
import aboutTaskIcon from '../img/msinfo32.exe_14_128-7.png';

function AboutMeTask(props) {
    return (
        <div className={`task ${props.isAboutWindowVisible ? 'task-active' : ''}`} onClick={props.toggleAboutWindow}>
            <img id="icon" src={aboutTaskIcon} alt="About Me" />
            <p>About Me</p>
        </div>
    );
}

export default AboutMeTask;
