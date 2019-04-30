import React from "react";
import "./Button.css";

const button = ( {children, clicked}) => {
    return <button onClick={clicked} className="btnStyle">{children}</button>
}

export default button;