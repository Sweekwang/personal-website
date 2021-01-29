import React, {useState, Fragment} from 'react';
import classes from './Projects.module.css';

import BTT1 from '../../../Assets/FTTBTT.png';
import BTT2 from '../../../Assets/BTT2.png';
import BTT3 from '../../../Assets/BTT3.png';
import BTT4 from '../../../Assets/BTT4.png';
import Math1 from '../../../Assets/Math1.png';
import Math2 from '../../../Assets/Math2.png';
import Math3 from '../../../Assets/Math3.png';
import Math4 from '../../../Assets/Math4.png';
import Appdev from '../../../Assets/Appdev.png';
import Appstore from '../../../Assets/appstore.svg';
import Lab from '../../../Assets/lab.png';

import Box from '../../../Components/Box/Box';
import Header from '../../../Components/Header/Header';
import TabButton from '../../../Components/UI/Tab Button/TabButton';
import Button from '../../../Components/UI/Button/Button';


const WorkSection = () => {

    const allProjects = [
        {
            title: 'BTT and FTT iOS Application',
            cat: 'ios',
            images: [BTT3, BTT4, BTT2, BTT1],
            imageHoverText: ['A easy to use report system and the information is stored in Cloud Firestore.', 
                             'Interactive quiz which will automatically mark each question.', 
                             "The score is stored in Core Date. Ungraded will become the user's score.", 
                             'Both Dark and Light mode are avaliable for FTT and BTT App.'],
            appstoreLink: ["https://apps.apple.com/us/app/id1464828216", "https://apps.apple.com/us/app/ftt-2020-final-theory-test/id1466350808"],
            mainText: "BTT or Basic Theory Test App is the first app that I had created and published onto App Store. Basic Theory Test " +  
                      "is a driving licence test in Singapore which test the knowledge of traffic rules, regulations, sign and etc in Singapore." + 
                      "I created this app to convert the physical copy book into an application so that students whose are taking this test" + 
                      "doesn't need to carry a book around.",
            textLi: ["After created BTT App, I created an similar App called FTT or Final Theory Test which is the 2nd driving licence test before going for pratical test by changing the model and the design of the BTT App.",
                     "Modal View Controller design pattern is used for both BTT and FTT App.",
                     "Core Data is used to store score of each quizzes.",
                     "Cloud Firestore is used to store the feedback, error and email of the user that reported bug to me.",
                     "Google Admob is used for monetization."]
        },
        {
            title: 'Mental Math - Math Trainer App',
            cat: 'ios',
            images: [Math4, Math3, Math2, Math1],
            imageHoverText: ['Score of the quiz is recorded.', 
                             'Similar calculator interface was created.', 
                             "User can change the setting before starting the quiz.", 
                             'Different type of math questions can be selected.'],
            appstoreLink: ["https://apps.apple.com/bh/app/mental-math-math-trainer/id1538276170"],
            mainText: "Mental Math Trainer, a quick and easy way to improve your mental arithmetic for Add, Subtract, Divide and Multiply. " +  
                      "This app was created for myself to train my mental calculation " + 
                      "so that I am able to pratice mental calculation at any places when I have my phone.",
            textLi: ["UIView animation was learned and applied to this app when displaying the score.",
                     "Modal View Controller design pattern is used.",
                     "Google Admob is used for monetization."]
        },
        {
            title: 'appdevelopments.co',
            cat: 'ios',
            images: [Appdev],
            link: "www.",
            linkname: 'appdevelopments.co',
            imageHoverText: [''],
            appstoreLink: [],
            mainText: 'This is a website that was created to store my personnel documentations and code example. ' + 
                      'Moreover, my current plan for this site was to expend and to teach mobile '+ 
                      'development for free for anyone. Which online courses will be conducted in YouTube.',
            textLi: ["Tech used: HTML, CSS, Javascript, and React.js",
                     "Website is hosted in GitHub to save cost."]
        },
        {
            title: 'Enhancing the Biocompatibility and Biodegradability of Linear Poly(ethylene imine) through Controlled Oxidation',
            cat: 'ios',
            images: [Lab],
            link: "https://pubs.acs.org/doi/abs/10.1021/acs.macromol.5b01940",
            linkname: 'ACSPublications',
            imageHoverText: [''],
            appstoreLink: [],
            mainText: "Christoph Englert, Matthias Hartlieb, Peter Bellstedt, Kristian Kempe, Chuan Yang, Swee Kwang Chu, Xiyu Ke, Jeannette M. Garcıa, Robert J. Ono, Mareva Fevre, Rudy J. Wojtecki, Ulrich S. Schubert, Yi Yan Yang, and James L. Hedrick Macromolecules, 2015, 48 (20), pp 7420–7427",
            textLi: ["This project was part of my internship at A*STAR IBM.",
                     "My Main Job Scope was Cytotoxicity and Serum Stability analysis."]
        }

    ];

    const [myProjects, SetMyProjects] = useState(allProjects.slice(0, 2));
    const [screenSize, setScreenSize] = useState("1000");
    const [moreBtnText, setMoreBtnText] = useState("Show more");

    const moreClicked = () => {

        if (moreBtnText === "Show more") {
            setMoreBtnText("Show less");
            SetMyProjects(allProjects);
            setScreenSize("1500");
        } else {
            setMoreBtnText("Show more");
            SetMyProjects(allProjects.slice(0, 2));
            setScreenSize("1000");
        }
        
    };




    return(
        <Box size = {screenSize}>
            <div className = {classes.WorkArea} id = "project">
                <Header text = {'3. My Projects'}/>
                <br/>
                {/* <div className = {classes.Tab}>
                    <TabButton bordertype = 'Left' 
                               actived = {"allClicked"}
                               onClick = {"TabClick"}>All Projects</TabButton>
                    <TabButton actived = {"softwareClicked"}
                               onClick = {"TabClick"}>iOS Development Related</TabButton>
                    <TabButton actived = {"softwareClicked"}
                               onClick = {"TabClick"}>Web Development Related</TabButton>
                    <TabButton actived = {"bioClicked"}
                               onClick = {"TabClick"}>Biological Related</TabButton>
                </div> */}
                <div>
                    
                    {
                        myProjects.map((results) => {
                            return(
                                <div className = {classes.Content}>
                        <div className = {(results.images.length !== 1) ? classes.ContentImage : classes.ContentSmallImage}>
                            {results.images.map((image, index) => {
                                    if(results.images.length === 1){
                                        return(
                                        <Fragment>
                                            <img className = {classes.ContentOneImage} src = {image} alt = "Swee Kwang"/>
                                            <h3 className = {classes.ContentText1} >{results.imageHoverText[index]}</h3>
                                        </Fragment>
                                        )
                                    }
                                    if (index === 0) {
                                        return(
                                        <Fragment>
                                            <img className = {classes.ContentImage1} src = {image} alt = "Swee Kwang"/>
                                            <h3 className = {classes.ContentText1} >{results.imageHoverText[index]}</h3>
                                        </Fragment>
                                        )
                                    } else if (index === 1){
                                        return(
                                        <Fragment>
                                            <img className = {classes.ContentImage2} src = {image} alt = "Swee Kwang"/>
                                            <h3 className = {classes.ContentText2} >{results.imageHoverText[index]}</h3>
                                        </Fragment>
                                        )
                                    } else if (index === 2){
                                        return(
                                        <Fragment>
                                            <img className = {classes.ContentImage3} src = {image} alt = "Swee Kwang"/>
                                            <h3 className = {classes.ContentText3} >{results.imageHoverText[index]}</h3>
                                        </Fragment>
                                        )
                                    } else {
                                        return(
                                        <Fragment>
                                            <img className = {classes.ContentImage4} src = {image} alt = "Swee Kwang"/>
                                            <h3 className = {classes.ContentText4} >{results.imageHoverText[index]}</h3>
                                        </Fragment>
                                        )
                                    }
                            })}
                            <p className = {classes.ContentTextInfo}> {results.images.length !== 1 ? "( Hover over the image for more info )" : null}</p>
                        </div>
                        <div className = {classes.ContentText}>
                            
                            <h3>{results.title}</h3>
                            {(results.images.length === 1) ? <a href = {results.link}>{results.linkname}</a> : null}

                            {results.appstoreLink.map((hrefLink) => {
                                return(
                                    <a className = {classes.appstore} href = {hrefLink} target="_blank" rel="noopener noreferrer"><img src = {Appstore} alt = 'imag'/></a>
                                )
                            })}
                            
                            <p>{results.mainText}</p>
                            <ul>
                            {results.textLi.map((text) => {
                                return(
                                    <li>{text}</li>
                                )
                            })}
                            
                            </ul>
                        </div>
                    </div>
                            )
                        })
                    }

                    
                </div>
                <div className = {classes.morediv}>
                    <Button onClick = {moreClicked}>{moreBtnText}</Button>
                </div>

            </div>
        </Box>
    )
};

export default WorkSection;