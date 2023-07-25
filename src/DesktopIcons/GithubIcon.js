import '../App.css';
import Draggable from 'react-draggable';
import Icon from '../img/github-mark.png';
import React from "react";
const github = 'https://github.com/Isaiahdaiz'

function handleOnClick() {
      window.open(github);
    };

function GithubIcon() {
    return (
        <>
            <Draggable defaultClassName={"draggable-icon"} defaultPosition={{ x: 25, y: 100 }}>
                <div onClick={handleOnClick}>
                    <img id="icon" src={Icon} alt="Resume"></img>
                    <p>Github</p>
                </div>
            </Draggable>
        </>
    )
}
export default GithubIcon;