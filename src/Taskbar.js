import './App.css';
import logo from './img/windows-xp-start-icon.png';
import React, { useState, useEffect } from 'react';


function Taskbar() {
    return (
        <div class="taskbar">
            <Start />
            <Tasks />
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
function Tasks() {
    return (
        <div class="tasks">
            Task
        </div>
    )
}

function Tray() {
    const [dateState, useDateState] = useState(new Date());
    return (
        <div class="tray">
            <div>Tray</div>
            <div id="system-time">{dateState.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
    )
}

export default Taskbar;