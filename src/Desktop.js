import './App.css';
import Draggable from 'react-draggable';
import contactDesktopIcon from './img/msoeres.dll_14_52-6.png';
import React from "react";
import ContactMe from './Programs/ContactMe';
import ContactTask from './Tasks/ContactMeTask';
import Taskbar from './Taskbar';

function Desktop() {
    const [isContactWindowVisible, setIsContactWindowVisible] = React.useState(false);
    const openContactWindow = () => setIsContactWindowVisible(true);
    const closeContactWindow = () => setIsContactWindowVisible(false);
    const toggleContactWindow = () => { setIsContactWindowVisible((prevState) => !prevState); console.log("toggle Contact window"); }
    return (
        <>
            <ContactMeIcon showWindow={openContactWindow} />
            <Taskbar toggleContactWindow={toggleContactWindow}/>
            {isContactWindowVisible && <ContactMe closeWindow={closeContactWindow} />}
        </>
    )
}

function ContactMeIcon(props) {
    return (
        <>
            <Draggable defaultClassName={"draggable-icon"} defaultPosition={{ x: 25, y: 25 }}>
                <div onDoubleClick={props.showWindow}>
                    <img id="icon" src={contactDesktopIcon} alt="Contact Me"></img>
                    <p>Contact Me</p>
                </div>
            </Draggable>
        </>
    )
}
export default Desktop;