import './App.css';
import React, { useState } from "react";
import ContactMe from './Programs/ContactMe';
import ContactMeIcon from './DesktopIcons/ContactMeIcon';
import useContactWindow from './Uses/ContactMeWindow';
import Taskbar from './Taskbar';
import AboutMe from './Programs/AboutMe';
import AboutMeIcon from './DesktopIcons/AboutMeIcon';
import useAboutWindow from './Uses/AboutMeWindow';
import Resume from './Programs/Resume';
import ResumeIcon from './DesktopIcons/ResumeIcon';
import useResumeWindow from './Uses/ResumeWindow';

function Desktop() {
    const [selectedDiv, setSelectedDiv] = useState(null);

    const handleClick = (event) => {
        setSelectedDiv(event.target);
        event.target.style.zIndex = 1;
    }

    const handleBlur = () => {
        if (selectedDiv) {
            selectedDiv.style.zIndex = 0;
        }
    }

    const {
        isAboutWindowVisible,
        isAboutTaskVisible,
        openAboutWindow,
        closeAboutWindow,
        toggleAboutWindow,
    } = useAboutWindow();

    const {
        isContactWindowVisible,
        isContactTaskVisible,
        openContactWindow,
        closeContactWindow,
        toggleContactWindow,
    } = useContactWindow();

    const {
        isResumeWindowVisible,
        isResumeTaskVisible,
        openResumeWindow,
        closeResumeWindow,
        toggleResumeWindow,
    } = useResumeWindow();

    return (
        <>
            <AboutMeIcon showWindow={openAboutWindow} />
            <ContactMeIcon showWindow={openContactWindow} />
            <ResumeIcon showWindow={openResumeWindow}/>

            {/* Wrap as button to handle onblur event */}
            {isContactWindowVisible && <button class="window-button" onClick={handleClick} onBlur={handleBlur}><ContactMe closeWindow={closeContactWindow} restoreWindow={toggleContactWindow} /></button>}
            {isResumeWindowVisible && <button class="window-button" onClick={handleClick} onBlur={handleBlur}><Resume closeWindow={closeResumeWindow} restoreWindow={toggleResumeWindow} /></button>}
            {isAboutWindowVisible && <button class="window-button" onClick={handleClick} onBlur={handleBlur}><AboutMe closeWindow={closeAboutWindow} restoreWindow={toggleAboutWindow} /></button>}
            <Taskbar
                toggleContactWindow={toggleContactWindow} isContactTaskVisible={isContactTaskVisible}
                toggleResumeWindow={toggleResumeWindow} isResumeTaskVisible={isResumeTaskVisible}
                toggleAboutWindow={toggleAboutWindow} isAboutTaskVisible={isAboutTaskVisible}
            />
        </>
    )
}

export default Desktop;