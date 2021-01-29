import classes from './Tabbar.module.css';

const Button = (props) => {
    var borderType = classes.NoCorner;

    if (props.bordertype === 'Left'){
        borderType = classes.LeftCorner;
    } else if (props.bordertype === 'Right'){
        borderType = classes.RightCorner;
    }

    var activeStyle = null;

    if (props.actived === true){
        activeStyle = classes.Actived;
    }

    return(
        <button className = {[classes.Button, borderType, activeStyle].join(' ')} 
                onClick = {props.onClick}
                value = {props.children}>
                {props.children}
        </button>
    )
};

export default Button;