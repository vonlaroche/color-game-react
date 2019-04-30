import React, { Component } from "react";
import Square from "../../components/Square/Square";
import Button from "../Button/Button";
import "./Game.css";

let NUM_SQUARES = 3;


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

const chooseCorrectIndex = () => {
    let correctIndex = Math.floor(Math.random() * NUM_SQUARES);
    return correctIndex;
}


class Game extends Component {
    state = {
        colorsArr: createColorsArr(),
        correctIndex: chooseCorrectIndex(),
        backgroundColorHead: "rgb(10, 189, 202)"
    }

    checkSquareHandler = index => {
        if (index === this.state.correctIndex) {
            alert("You guessed!");
            let tempColorsArr= [];
            for(let i=0; i<NUM_SQUARES; i++){
                tempColorsArr[i] = this.state.colorsArr[this.state.correctIndex];
            }
            this.setState({
                colorsArr:tempColorsArr,
                backgroundColorHead:tempColorsArr[0]
            });
        }
        else {
            alert("Try again");
        }
    }

    newGameHandler = () => {
        this.setState({
            colorsArr: createColorsArr(),
            correctIndex: chooseCorrectIndex(),
            backgroundColorHead: "rgb(10, 189, 202)"
        })
    }

    hardModeHandler = () => {
        NUM_SQUARES = 6;
        this.setState({
            colorsArr: createColorsArr(),
            correctIndex: chooseCorrectIndex(),
            backgroundColorHead: "rgb(10, 189, 202)"
        })
    }

    easyModeHandler = () => {
        NUM_SQUARES = 3;
        this.setState({
            colorsArr: createColorsArr(),
            correctIndex: chooseCorrectIndex(),
            backgroundColorHead: "rgb(10, 189, 202)"
        })
    }

    render() {
        return (
            <div>
                <section className="head" style={{backgroundColor:this.state.backgroundColorHead}}>
                    <h1><p>Guess the color!</p></h1>
                    <br />
                    <h2>
                        <p className="colorParagraph">
                            {this.state.colorsArr[this.state.correctIndex]}
                        </p>
                    </h2>
                </section>
                <div className="filler">
                    <Button clicked={() => this.newGameHandler()}>New Game</Button>
                    <Button clicked={() => this.easyModeHandler()}>Easy Mode</Button>
                    <Button clicked={() => this.hardModeHandler()}>Hard Mode</Button>
                </div>
                <section className="game">
                    {this.state.colorsArr.map((color, index) =>
                        <Square onClick={() => this.checkSquareHandler(index)} color={color} />
                    )}
                </section>
            </div>
        )
    }
}

export default Game;
