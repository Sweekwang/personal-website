import classes from './AboutSection.module.css';
import Box from '../../../Components/Box/Box';
import Header from '../../../Components/Header/Header';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return(
        <Box size = "contact">
            <div className = {classes.AboutArea} id = "contact">
                <h1>Contact Me</h1>
                <p>I am open for internship and full time job as an iOS developer.</p>
                <p>You can contact me via one of the platform and I will reply within 24 hours.</p>
                <div className = {classes.flexBox}>
                    <div>
                        <a className = {classes.brands} href = "https://www.linkedin.com/in/chuasweekwang/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <div >
                    <a className = {classes.brands} href = "https://www.instagram.com/sweekwang/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                    <div >
                    <a className = {classes.brands} href = "mailto: sweekwang94@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
                    </div>
                </div>
            </div>

        </Box>
    )
};

export default About;