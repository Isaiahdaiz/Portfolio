import '../App.css';
import Draggable from 'react-draggable';
import windowIcon from '../img/msinfo32.exe_14_128-7.png';
import React, { useState } from 'react';
import algoma from '../img/296109870_878575170182040_4640716686003688037_n.jpg'
import nait from '../img/NAIT-Shield.jpg'


function AboutMe(props) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = 400; // Default width of window
    const elementHeight = 500; // Defult height of window
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
        left: isMaximized ? 0 : undefined,
        minWidth: '365px'
    };

    function handleMaximizeClick() {
        setIsMaximized(true);
    }

    function handleMinimizeClick() {
        setIsMaximized(false);
    }
    const [activeTab, setActiveTab] = useState("tab1");

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Draggable
            handle=".draggable-window .titlebar"
            defaultClassName={"draggable-window"}
            defaultPosition={defaultPosition}
        //disabled={isMaximized}
        >
            <div style={style}>
                <div class="titlebar">
                    <img id="icon" src={windowIcon} alt="About Me"></img>
                    <p>About Me</p>
                    <div class="restore" onClick={props.restoreWindow}>-</div>
                    {/* {isMaximized ? <div class="minimize" onClick={handleMinimizeClick}>=</div> : <div class="maximize" onClick={handleMaximizeClick}>=</div>} */}
                    <div class="close" onClick={props.closeWindow}>X</div>
                </div>
                <div class="tabs">
                    <button className={activeTab === "tab1" ? "active" : ""} onClick={() => handleClick("tab1")} >
                        General
                    </button>
                    <button className={activeTab === "tab2" ? "active" : ""} onClick={() => handleClick("tab2")} >
                        Education
                    </button>
                    <button className={activeTab === "tab3" ? "active" : ""} onClick={() => handleClick("tab3")} >
                        Skills
                    </button>
                    <button className={activeTab === "tab4" ? "active" : ""} onClick={() => handleClick("tab4")} >
                        Hobbies
                    </button>
                </div>
                <div class="content">
                    {activeTab === "tab1" && <p>
                        Content for Tab 1
                    </p>}
                    {activeTab === "tab2" && <div id="tab2">
                        <div class="container">
                            <img src={algoma} style={{ width: "150px", height: "150px" }} />
                            <div id="algoma-container">
                                <h2>Bachelor of Computer Science</h2>
                                <h3>Accelerated (1 Year)</h3>
                                <p>2022 to 2023</p>
                                <p>Algoma University</p>
                                <p>Brampton, ON</p>
                            </div>
                        </div>
                        <div class="container">
                            <img src={nait} style={{ width: "100px", height: "", padding: "0 28px"}} />
                            <div id="nait-container">
                                <h2>Instrumentation Engineering Technology</h2>
                                <h3>With Honours</h3>
                                <p>2018 to 2020</p>
                                <p>Northern Alberta Institute of Technology</p>
                                <p>Edmonton, AB</p>
                            </div>
                        </div>
                    </div>}
                    {activeTab === "tab3" && <p>Content for Tab 3</p>}
                    {activeTab === "tab4" && <p>Content for Tab 4</p>}
                </div>
            </div>
        </Draggable>
    )
}

export default AboutMe;