import classes from "./Sideber.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    return(
        <div className = {classes.Sidebar}>
            <a className = {classes.brands} href = "https://www.linkedin.com/in/chuasweekwang/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a className = {classes.brands} href = "https://github.com/Sweekwang" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
            <a className = {classes.brands} href = "https://www.instagram.com/sweekwang/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
            <a className = {classes.brands} href = "mailto: sweekwang94@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
            <div className = {classes.vl}></div>
        </div>

    )
};

export default Sidebar;