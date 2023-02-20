import './App.css';
import Draggable, { DraggableCore } from 'react-draggable';
import contactDesktopIcon from './img/msoeres.dll_14_52-6.png';
import React from "react";
import ContactMe from './Programs/ContactMe';

function Desktop() {
    return (
        <>
            <ContactMeIcon />
        </>
    )
}
function ContactMeIcon() {
    const [showResults, setShowWindow] = React.useState(false)
    const onDoubleClick = () => setShowWindow(true)
    const closeWindow = () => setShowWindow(false)
    return (
        <>
            <Draggable defaultClassName={"draggable-icon"} defaultPosition={{ x: 25, y: 25 }}>
                <div onDoubleClick={onDoubleClick}>
                    <img id="icon" src={contactDesktopIcon} alt="Contact Me"></img>
                    <p>Contact Me</p>
                </div>

            </Draggable>
            {showResults ? <ContactMe closeWindow={closeWindow} /> : null}

        </>
    )
}
export default Desktop;