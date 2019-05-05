import React, { Component } from "react";
import Square from "../../components/Square/Square";
import Button from "../Button/Button";
import "./Game.css";

const DEFAULT_NUM_SQUARES = 3;
const NUM_SQUARES_HARD = 6;
const COLOR_BLUE = "rgb(10, 189, 202)";
const defaultParagraphText = "Guess the color!";

const randomRGB = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}

const createColorsArr = NUM_SQUARES => {
    let colorsArrForState = [];

    for (let i = 0; i < NUM_SQUARES; i++) {
        colorsArrForState[i] = randomRGB();
    }

    return colorsArrForState;
}

const chooseCorrectIndex = NUM_SQUARES => {
    let correctIndex = Math.floor(Math.random() * NUM_SQUARES);
    return correctIndex;
}


class Game extends Component {
    state = {
        colorsArr: createColorsArr(DEFAULT_NUM_SQUARES),
        correctIndex: chooseCorrectIndex(DEFAULT_NUM_SQUARES),
        numSquares: DEFAULT_NUM_SQUARES,
        backgroundColorHead: COLOR_BLUE,
        paragraphText: defaultParagraphText,

    }

    checkSquareHandler = index => {
        if (index === this.state.correctIndex) {
            let tempColorsArr = [];
            for (let i = 0; i < this.state.numSquares; i++) {
                tempColorsArr[i] = this.state.colorsArr[this.state.correctIndex];
            }
            this.setState({
                colorsArr: tempColorsArr,
                backgroundColorHead: tempColorsArr[0],
                paragraphText: "You guessed!"
            });
        }
        else {
            this.setState({
                paragraphText: "Try again"
            })
        }
    }

    newGameHandler = () => {
        this.setState({
            colorsArr: createColorsArr(this.state.numSquares),
            correctIndex: chooseCorrectIndex(this.state.numSquares),
            backgroundColorHead: COLOR_BLUE,
            paragraphText: defaultParagraphText
        })
    }

    difficultyModeHandler = NUM_SQUARES => {
        this.setState({
            colorsArr: createColorsArr(NUM_SQUARES),
            correctIndex: chooseCorrectIndex(NUM_SQUARES),
            numSquares: NUM_SQUARES,
            backgroundColorHead: COLOR_BLUE,
            paragraphText: defaultParagraphText
        })
    }

    render() {
        return (
            <div>
                <section className="head" style={{ backgroundColor: this.state.backgroundColorHead }}>
                    <h1><p>{this.state.paragraphText}</p></h1>
                    <br />
                    <h2>
                        <p className="colorParagraph">
                            {this.state.colorsArr[this.state.correctIndex]}
                        </p>
                    </h2>
                </section>
                <div className="filler">
                    <Button clicked={() => this.newGameHandler()}>New Game</Button>
                    <Button clicked={() => this.difficultyModeHandler(DEFAULT_NUM_SQUARES)}>Easy Mode</Button>
                    <Button clicked={() => this.difficultyModeHandler(NUM_SQUARES_HARD)}>Hard Mode</Button>
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
