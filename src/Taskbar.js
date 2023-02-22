import './App.css';
import logo from './img/windows-xp-start-icon.png';
import React, { useState } from 'react';
import ContactMeTask from './Tasks/ContactMeTask';
import ResumeTask from './Tasks/ResumeTask';
import AboutMeTask from './Tasks/AboutMeTask';

function Taskbar(props) {
    return (
        <div class="taskbar">
            <Start />
            <Tasks 
            toggleAboutWindow={props.toggleAboutWindow} isAboutTaskVisible={props.isAboutTaskVisible}
            toggleResumeWindow={props.toggleResumeWindow} isResumeTaskVisible={props.isResumeTaskVisible} 
            toggleContactWindow={props.toggleContactWindow} isContactTaskVisible={props.isContactTaskVisible} 
            />
            <Tray />
        </div>
    );
}
function Start() {
    return (
        <div class="start">
            <img id="icon" src={logo} />
            Start
        </div>
    )
}
function Tasks(props) {
    return (
        <div class="tasks">
            {props.isAboutTaskVisible && <AboutMeTask toggleWindow={props.toggleAboutWindow}/>}
            {props.isResumeTaskVisible && <ResumeTask toggleWindow={props.toggleResumeWindow}/>}
            {props.isContactTaskVisible && <ContactMeTask toggleWindow={props.toggleContactWindow}/>}
        </div>
    )
}

function Tray() {
    const [dateState, useDateState] = useState(new Date());
    return (
        <div class="tray">
            <div id="system-time">{dateState.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
    )
}

export default Taskbar;