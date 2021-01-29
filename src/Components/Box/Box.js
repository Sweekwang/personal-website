import classes from './Box.module.css';

const Box = (props) => {
    let css = [classes.Box]
    if (props.margin === true) {
        css.push(classes.navMargin)
    } else {
        css.push(classes.zeroMargin)
    }

    if (props.size === "f") {
        css.push(classes.f)
    } else if (props.size === "600"){
        css.push(classes.s600)
    } else if (props.size === "6002"){
        css.push(classes.s6002)
    } else if (props.size === "1000"){
        css.push(classes.s1000)
    } else if (props.size === "1500"){
        css.push(classes.s1500)
    } else if (props.size === "contact"){
        css.push(classes.contact)
    } else {
        css.push(classes.f)
    }

    return(
        <div className = {css.join(' ')} id = {props.id}>
            {props.children}
        </div>
    )
};

export default Box;