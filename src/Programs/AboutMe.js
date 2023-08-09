import '../App.css';
import Draggable from 'react-draggable';
import windowIcon from '../img/msinfo32.exe_14_128-7.png';
import React, { useState } from 'react';
import algoma from '../img/296109870_878575170182040_4640716686003688037_n.jpg';
import nait from '../img/NAIT-Shield.jpg';
import systemIcon from '../img/System_Icon.png';
import birdLogo from '../img/logo-bird-100-years.png'
import ncglLogo from '../img/NCGL_FINAL-01.jpg'


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
        minWidth: '380px',
        minHeight: '450px'
    };

    function handleMaximizeClick() {
        setIsMaximized(true);
    }

    function handleMinimizeClick() {
        setIsMaximized(false);
    }

    function onClickEmail() {
        window.location = "mailto:daiz.isaiah@gmail.com";
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
                        Experience
                    </button>
                    <button className={activeTab === "tab4" ? "active" : ""} onClick={() => handleClick("tab4")} >
                        Other
                    </button>
                </div>
                <div class="content">
                    {activeTab === "tab1" && <div id="tab1">
                        <div class="container">
                            <img src={systemIcon} style={{ width: "120px", height: "109px" }} />
                            <div id="text">
                                <h2>System:</h2>
                                <p>Isaiah Daiz</p>
                                <p>Programmer</p>
                                <p style={{ paddingBottom: "10px" }}>Alumni</p>
                                <h2>Registered to:</h2>
                                <p style={{ paddingBottom: "10px" }}>Toronto, ON</p>
                                <h2>Computer:</h2>
                                <p style={{ paddingBottom: "10px" }}>Driven and dedicated individual with a passion for computer science, health and fitness</p>
                                <h2>Contact</h2>
                                <a href='mailto:daiz.isaiah@gmail.com'>daiz.isaiah@gmail.com</a>
                                <p>(780) 200-9225</p>
                            </div>

                        </div>
                    </div>}
                    {activeTab === "tab2" && <div id="tab2">
                        <div class="container">
                            <img src={algoma} style={{ width: "150px", height: "150px" }} />
                            <div id="algoma-container">
                                <h2>Bachelor of Computer Science</h2>
                                <h3>Accelerated</h3>
                                <p>2022 to 2023</p>
                                <p>Algoma University</p>
                                <p>Brampton, ON</p>
                            </div>
                        </div>
                        <div class="container">
                            <img src={nait} style={{ width: "100px", height: "143px", padding: "0 28px" }} />
                            <div id="nait-container">
                                <h2>Instrumentation Engineering Technology</h2>
                                <h3>With Honours</h3>
                                <p>2018 to 2020</p>
                                <p>Northern Alberta Institute of Technology</p>
                                <p>Edmonton, AB</p>
                            </div>
                        </div>
                    </div>}
                    {activeTab === "tab3" && <div id="tab3">
                        <div id="logos">
                            <img src={ncglLogo} alt='ncgl-logo' style={{ width: "150px" }} />
                            <img src={birdLogo} alt='bird-logo' style={{ width: "150px" }} />
                        </div>
                        <h2>PLC/HMI Programmer</h2>
                        <h3>NCGL Construction Ltd. (BIRD Construction Subsidiary)</h3>
                        <p>Edmonton, AB</p>
                        <p>Aug. 2021 to Present</p>
                        <p></p>
                    </div>}
                    {activeTab === "tab4" && <div id="tab4">
                        <h1>Skills</h1>
                        <h2>Programming</h2>
                        <p>Java, Kotlin, Python, C#, CSS, HTML, Javascript, SQL, VB, XAML, PLC, Assembly (Irvine32), Ladder Logic, Function Block Diagram, Structured Text</p>
                        <h2>Environments</h2>
                        <p>VSCode, Rockwell, Proficy (GE), Beijer, Schneider</p>
                        <h2>Other</h2>
                        <p style={{ paddingBottom: "10px" }}>Waterfall Development Process, Git, Object-oriented Programming, React, MSSQL</p>
                        <h1>Awards</h1>
                        <ul style={{ paddingBottom: "10px" }}>
                            <li>Jason Lang Scholarship - Alberta Scholarships</li>
                            <li>Dean’s Honour Roll - Northern Alberta Institute of Technology</li>
                            <li>Syncrude Higher Education Award Program Scholarship - Awards Canada, Syncrude</li>
                            <li>Alexander Rutherford Scholarship - Alberta Scholarships</li>
                        </ul >
                        <h1>Hobbies</h1>
                        <img src='https://i.gifer.com/1Sqv.gif' alt='dorito-workout' style={{ width: "150px", height: "150px" }} />
                        <p>I enjoy engaging in physical activity regularly, including winter sports, cycling, and resistance traning.</p>
                        <img src='https://64.media.tumblr.com/aadef2ed20ff2edcaedf4fb6b5f8a8b9/tumblr_o93wwcqfyG1tgo74ho1_1280.gif' alt='Overwatch-8bit' style={{ width: "300px", height: "150px" }} />
                        <p style={{ paddingBottom: "10px" }}>Video games are a popular hobby of mine. I am interested in all games from triple AAA titles to indie developed ones .</p>
                    </div>}
                </div>
            </div>
        </Draggable>
    )
}

export default AboutMe;