import './App.css';
import userIcon from './img/StartMenuIcon.png'

function StartMenu() {
    return (
        <div class='startMenu'>
            <div class='header'>
                <img src={userIcon} alt="startMenuIcon" />
                <p>Guest</p>
            </div>
            <div class='container'>
                Projects list coming soon
            </div>
        </div>
    )
}

export default StartMenu;