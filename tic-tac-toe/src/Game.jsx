import React from "react";
import './Game.css'

const Square = () => {
    const value = false;
    return(
            <div className='square'>
                {value && (
                    <img className='image' src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png"/>
                )}
                {!value &&(
                    <img className='image' src="https://cdn-icons-png.flaticon.com/512/3524/3524377.png"/>
                )}
            </div>
    );
}

const Game = () => {
    return(
        <div className="container">
            <p>player1</p>
            <p>player2</p>
            <div className="board">
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    );
}

export default Game;