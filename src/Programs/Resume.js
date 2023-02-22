import '../App.css';
import Draggable from 'react-draggable';
import windowIcon from '../img/PDF_file_icon.png';
import React, { useState } from 'react';
import resume from '../Docs/Resume Isaiah.pdf'

function Resume(props) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = 700; // Default width of window
    const elementHeight = 800; // Defult height of window
    const defaultPosition = {
        x: (windowWidth - elementWidth) / 2,
        y: (windowHeight - elementHeight * 1.7) / 2
    };
    const [isMaximized, setIsMaximized] = useState(false);
    const style = {
        width: isMaximized ? windowWidth - 6 : elementWidth,
        height: isMaximized ? windowHeight - 40 : elementHeight,
        borderRadius: isMaximized ? 0 : '2%',
        top: isMaximized ? 0 : undefined,
        left: isMaximized ? 0 : undefined

    };
    function handleOpenFile () {
        window.open(resume, 'Isaiah Daiz\'s Resume');
      }

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
                    <img id="icon" src={windowIcon} alt="Resume"></img>
                    <p>Resume</p>
                    <div class="restore" onClick={props.restoreWindow}>-</div>
                    {/* {isMaximized ? <div class="minimize" onClick={handleMinimizeClick}>=</div> : <div class="maximize" onClick={handleMaximizeClick}>=</div>} */}
                    <div class="maximize" onClick={handleOpenFile}>=</div>
                    <div class="close" onClick={props.closeWindow}>X</div>
                </div>
                {/* <div class="content"> */}
                    <iframe src="../Portfolio_WinXP/static/media/Resume%20Isaiah.4ae38261dcc79f2ecd9e.pdf" height={"100%"} width={"100%"}/>
                {/* </div> */}
            </div>
        </Draggable>
    )
}

export default Resume;