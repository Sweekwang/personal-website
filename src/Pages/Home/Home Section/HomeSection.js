import classes from './HomeSection.module.css';

import emo from '../../../Assets/emo.png';
import Box from '../../../Components/Box/Box';
import Button from '../../../Components/UI/Button/Button';

const HomeSection = () => {
    return(
        <Box margin = {true}>
            <div className = {classes.HomeArea}>
                <img className = {classes.emo} src = {emo} alt = "Chua Swee Kwang Emoji"/>
                <p className = {classes.small}>Hello, my name is</p>
                <h1>Chua Swee Kwang.</h1>
                <h2>I am an iOS Developer.</h2>
                <p className = {classes.subtext}>I am a self-taught software engineer located 
                   in Singapore, Singapore with a major in Biological Sciences and I am passinate 
                   in learning and creating web and mobile applications.</p>
                <Button href = "#contact">Contact me</Button>
            </div>
            <p className = {classes.arrow}></p>
        </Box>
    )
};

export default HomeSection;