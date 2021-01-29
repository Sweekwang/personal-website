import classes from './AboutSection.module.css';
import SweeKwang from '../../../Assets/SweeKwang.jpeg';
import Box from '../../../Components/Box/Box';
import Header from '../../../Components/Header/Header';

const About = () => {
    return(
        <Box size = "600" id = "about">
            <div className = {classes.AboutArea}>
                <Header text = {'1. About'}/>
                <div className = {classes.flexBox}>
                    <div className = {classes.right}>
                        <p>Hello, I'm Swee Kwang and you can call me Wes. I am a student in 
                        <a href = "https://www.ntu.edu.sg/Pages/home.aspx"> Nanyang Technology University </a>
                        majoring in Biological Sciences.</p>
                        <p>I love developing and creating applications ever since I started learning 
                        iOS developemnt and create my <a href= "https://apps.apple.com/bh/app/btt-2020-basic-theory-test/id1464828216">first iOS application</a>.
                        Learning coding is not an easy task as I need to manage my time in studying my biology modules, programming and my life. 
                        From this, I am able to manage my time effectively and able to acquire a second upper in Biology Sciences. 
                        As my interest in development and coding increases, I continue to learn stuff via books and 
                        online courses to keep myself updated and develop skills towards a Full Stack Developement, UI Designer and Scrum Master.</p>
                        
                        <p>Here are a few skills I'v been working and improving on: <br/><br/></p>
                        <p className = {classes.skills}><span className= {classes.pink}>iOS Developement: </span>
                            Xcode, iOS, Swift, UIKit, SwiftUI, Coredata, Realm</p>
                        <p className = {classes.skills}><span className= {classes.pink}>Web Developement: </span>
                            HTML, CSS, Javascript, React.js, Flask</p>
                        <p className = {classes.skills}><span className= {classes.pink}>Other Techs: </span>
                            Python, Pandas, NumPy, Matplotlib, Seaborn, Basic Scikit-learn, postgresql, Google Firebase</p>
                        <p className = {classes.skills}><span className= {classes.pink}>Laboratory skills: </span>
                            Cell Culture, Bacteria Culture, Nano Zetasizer, blotting, PCR, and more </p>
                    </div>
                    <div className = {classes.left}>
                        <img src = {SweeKwang}/>
                        <div className = {classes.line}>
                            <div className = {classes.triangle}></div>
                        </div>
                        <div className = {classes.line2}>
                            <div className = {classes.triangle}></div>
                        </div>
                        <div className = {classes.line3}>
                            <div className = {classes.triangle2}></div>
                        </div>
                        <div className = {classes.line4}>
                            <div className = {classes.triangle2}></div>
                        </div>
                    </div>
                </div>
            </div>

        </Box>
    )
};

export default About;