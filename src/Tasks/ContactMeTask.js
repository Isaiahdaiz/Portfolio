import React, { useState } from 'react';
import contactTaskIcon from '../img/msoeres.dll_14_52-8.png';

function ContactMeTask(props) {
    return (
        <div className={`task ${props.isContactWindowVisible ? 'task-active' : ''}`} onClick={props.toggleContactWindow}>
            <img id="icon" src={contactTaskIcon} alt="Contact Me" />
            <p>Contact Me</p>
        </div>
    );
}

export default ContactMeTask;
