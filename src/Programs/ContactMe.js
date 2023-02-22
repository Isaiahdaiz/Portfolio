import '../App.css';
import Draggable from 'react-draggable';
import contactWindowIcon from '../img/msoeres.dll_14_52-8.png';
import React, { useState } from 'react';


function ContactMe(props) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = 500; // Default width of window
    const elementHeight = 200; // Defult height of window
    const defaultPosition = {
        x: (windowWidth - elementWidth) / 2,
        y: (windowHeight - elementHeight * 2) / 2
    };
    const [isMaximized, setIsMaximized] = useState(false);
    const style = {
        width: isMaximized ? windowWidth - 6 : elementWidth,
        height: isMaximized ? windowHeight - 40 : elementHeight,
        borderRadius: isMaximized ? 0 : '2%',
        top: isMaximized ? 0 : undefined,
        left: isMaximized ? 0 : undefined

    };

    function handleMaximizeClick() {
        setIsMaximized(true);
    }

    function handleMinimizeClick() {
        setIsMaximized(false);
    }

    return (
        <Draggable
            handle=".draggable-window .titlebar"
            defaultClassName={"draggable-window"}
            defaultPosition={defaultPosition}
            //disabled={isMaximized}
            >
            <div style={style}>
                <div class="titlebar">
                    <img id="icon" src={contactWindowIcon} alt="Contact Me"></img>
                    <p>Contact Me</p>
                    <div class="restore" onClick={props.restoreWindow}>-</div>
                    {/* {isMaximized ? <div class="minimize" onClick={handleMinimizeClick}>=</div> : <div class="maximize" onClick={handleMaximizeClick}>=</div>} */}
                    <div class="close" onClick={props.closeWindow}>X</div>
                </div>
                <div class="content">
                </div>
            </div>
        </Draggable>
    )
}

export default ContactMe;