import React from "react";
import Square from "../../components/Square/Square";
import "./Game.css";

const NUM_SQUARES = 3;

const randomRGB = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

const game = () => {
    let squaresArr = [];

    for (let i = 0; i < NUM_SQUARES; i++) {
        squaresArr[i] = <Square color={randomRGB()}></Square>
    }


    return <div>
        <section className="head">
            <h1><p>Guess the color!</p></h1>
            <br />
            <h2><p className="colorParagraph"></p></h2>
        </section>

        <div className="filler">
            <button className="newGame btnStyle">New Game</button>
            <button className="easyMode btnStyle">Easy Mode</button>
            <button className="hardMode btnStyle">Hard Mode</button>
        </div>

        <section className="game">
            {squaresArr}
        </section>
    </div>
}

export default game;