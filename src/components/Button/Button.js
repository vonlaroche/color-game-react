import React from "react";
import "./Button.css";

const button = ({children}) => {
    return <button className="btnStyle">{children}</button>
}

export default button;