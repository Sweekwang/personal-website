import classes from './Button.module.css';

const Button = (props) => {
    return(
        <a href = {props.href} className = {classes.Button} onClick = {props.onClick}>{props.children}</a>
    )
};

export default Button;