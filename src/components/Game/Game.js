import React, { Component } from "react";
import Square from "../../components/Square/Square";
import Button from "../Button/Button";
import "./Game.css";

const NUM_SQUARES = 3;

const randomRGB = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

const createColorsArr = () => {
    let colorsArrForState = [];

    for (let i = 0; i < NUM_SQUARES; i++) {
        colorsArrForState[i] = randomRGB();
    }

    return colorsArrForState;
}


class Game extends Component {
    state = {
        colorsArr: createColorsArr(),
        correctColor: ""
    }

    render() {
        return (
            <div>
                <section className="head">
                    <h1><p>Guess the color!</p></h1>
                    <br />
                    <h2><p className="colorParagraph"></p></h2>
                </section>
                <div className="filler">
                    <Button>New Game</Button>
                    <Button>Easy Mode</Button>
                    <Button>Hard Mode</Button>
                </div>
                <section className="game">
                    {this.state.colorsArr.map(color => <Square color={color} />)}
                </section>
            </div>
        )
    }
}

export default Game;
