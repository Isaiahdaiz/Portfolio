import './App.css';
import React from "react";
import ContactMe from './Programs/ContactMe';
import ContactMeIcon from './DesktopIcons/ContactMeIcon';
import Taskbar from './Taskbar';
import useContactWindow from './Uses/ContactMeWindow';

function Desktop() {
    const {
        isContactWindowVisible,
        isContactTaskVisible,
        openContactWindow,
        closeContactWindow,
        toggleContactWindow,
      } = useContactWindow();
    
    return (
        <>
            <ContactMeIcon showWindow={openContactWindow} />
            <Taskbar toggleContactWindow={toggleContactWindow} isContactTaskVisible={isContactTaskVisible}/>
            {isContactWindowVisible && <ContactMe closeWindow={closeContactWindow} />}
        </>
    )
}

export default Desktop;