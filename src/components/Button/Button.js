import React from "react";
import "./Button.css";

const button = (props, {children}) => {
    return <button onClick={props.clicked} className="btnStyle">{props.children}</button>
}

export default button;