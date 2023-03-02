import './App.css';
import logo from './img/windows-xp-start-icon.png';
import React, { useState } from 'react';
import ContactMeTask from './Tasks/ContactMeTask';
import ResumeTask from './Tasks/ResumeTask';
import AboutMeTask from './Tasks/AboutMeTask';
import Clock from './Utility/Clock';

function Taskbar(props) {
    return (
        <div class="taskbar">
            <Start toggleStartMenu={props.toggleStartMenu}/>
            <Tasks 
            toggleAboutWindow={props.toggleAboutWindow} isAboutTaskVisible={props.isAboutTaskVisible}
            toggleResumeWindow={props.toggleResumeWindow} isResumeTaskVisible={props.isResumeTaskVisible} 
            toggleContactWindow={props.toggleContactWindow} isContactTaskVisible={props.isContactTaskVisible} 
            />
            <Tray />
        </div>
    );
}
function Start(props) {
    return (
        <div class="start"  onClick={props.toggleStartMenu}>
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
    return (
        <div class="tray">
            <Clock />
        </div>
    )
}

export default Taskbar;