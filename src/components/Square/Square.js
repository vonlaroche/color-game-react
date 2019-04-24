import React from "react";
import "./Square.css";


const square = props => {
    return <div {...props} className="square" style={{backgroundColor:props.color}}></div>;
}

export default square;