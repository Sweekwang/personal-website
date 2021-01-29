import React, {useState} from 'react';
import classes from '../Navbar/Navbar.module.css';
import logo from '../../Assets/Swee Kwang Logo.svg';


const Navbar = () => {

    const [menuClass, setManuclass] = useState([classes.container]);
    const [navItems, setNavItems] = useState([classes.NavItems]);

    const menuClicked = () => {
        if (menuClass.includes(classes.change)){
            setManuclass([classes.container]);
            setNavItems([classes.NavItems]);

        } else {
            setManuclass([classes.container, classes.change])
            setNavItems([classes.NavItems, classes.show]);
        }
    };

    return(
        <nav className = {classes.Nav}>
            <div className = {classes.NavContent}>
                <img src = {logo} alt = 'Swee Kwang Logo'/>
                <div className = {navItems.join(' ')}>
                    <ol>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Experiences</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ol>

                    <a className = {classes.Resume} href = "https://drive.google.com/file/d/1wto95Clu_5yvecNdPOsVTmC65wUn_LDz/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>

                <div class={menuClass.join(' ')} onClick = {menuClicked}>
                    <div class={classes.bar1}></div>
                    <div class={classes.bar2}></div>
                    <div class={classes.bar3}></div>
                </div>

            </div>
        </nav>
    )
};

export default Navbar;