import contactTaskIcon from '../img/msoeres.dll_14_52-8.png';

function minimizeContactTask(props) {
    console.log("minimizeContactTask");
    return props.toggleWindow
}

function ContactMeTask(props) {
    return (
        <div class="task" onClick={props.toggleContactWindow}>
            <img id="icon" src={contactTaskIcon} alt="Contact Me" />
            <p>Contact Me</p>
        </div>
    )
}

export default ContactMeTask