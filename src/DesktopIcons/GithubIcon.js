import '../App.css';
import Draggable from 'react-draggable';
import Icon from '../img/github-mark.png';
import React from "react";
const github = 'https://github.com/Isaiahdaiz'

function DoubleClickLink() {
      window.open(github);
    };

function GithubIcon() {
    return (
        <>
            <Draggable defaultClassName={"draggable-icon"} defaultPosition={{ x: 25, y: 100 }}>
                <div onDoubleClick={DoubleClickLink}>
                    <img id="icon" src={Icon} alt="Resume"></img>
                    <p>Github</p>
                </div>
            </Draggable>
        </>
    )
}
export default GithubIcon;