import './App.css';
import userIcon from './img/StartMenuIcon.png'
import paperTradesIcon from './img/Paper Trades-logos_transparent1.png'

const paperTradesUrl = 'https://paper-trades-9225.web.app/'

function StartMenu() {
    const handleOnClick = (url) => {
        window.location.href = url
    }
    return (
        <div class='startMenu'>
            <div class='header'>
                <img src={userIcon} alt="startMenuIcon" />
                <p>Guest</p>
            </div>
            <div class='container'>
                <div class='startMenuItem' onClick={() => handleOnClick(paperTradesUrl)}>
                    <img src={paperTradesIcon} alt='paperTrades Logo' />
                    <p>Paper Trades</p>
                </div>
            </div>
        </div>
    )
}

export default StartMenu;