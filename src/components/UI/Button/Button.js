 import React from 'react'
import classes from './Button.module.css';

const button = (props) => (

    <button 
    // mesa st classname vazw pinaka giati exw 2 typou button
    //btnType pairnei dynamika apo toorderSummary kai pairnei t analogw css
    // thwlw n einai string mesa st button kai g auto vazw t join
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);

export default button;

// exw valei props.childer epeidi st kathe button thelw n emfanisw 
// ena cancel kai ena continue