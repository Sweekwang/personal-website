import classes from './Footer.module.css';


const Footer = () => {
    return(
            <div className = {classes.footer}>
                <p><strong>Built and designed by <a href = "https://www.linkedin.com/in/chuasweekwang/">Chua Swee Kwang</a></strong></p>
                <p>Inspired from <a href = "https://brittanychiang.com/">brittanychiang.com</a></p>
            </div>
    )
};

export default Footer;