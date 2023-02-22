import React from 'react';
import taskIcon from '../img/msoeres.dll_14_52-8.png';

function ContactMeTask(props) {
    return (
        <div className={`task ${props.isWindowVisible ? 'task-active' : ''}`} onClick={props.toggleWindow}>
            <img id="icon" src={taskIcon} alt="Contact Me" />
            <p>Contact Me</p>
        </div>
    );
}

export default ContactMeTask;
