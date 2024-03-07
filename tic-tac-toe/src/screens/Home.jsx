import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import Game from "./Game/Game";

const Home = () => {
    const [player1, setPlayer1]= useState('');
    const [player2, setPlayer2]= useState('');
    const navigate = useNavigate();
      
    const submitPlayers = (e)=>{
        e.preventDefault();
        const encodePlayer1 = encodeURIComponent(player1);
        const encodePlayer2 = encodeURIComponent(player2);
        const queryString = `?data1=<span class="math-inline">\{encodePlayer1\}&data2\=</span>{encodePlayer2}`;
        navigate(queryString);
    }
    
    return(
        <div className="container">
            <label className="player-lbl">Enter 1st player:</label>
            <input 
            type="text"
            id="player1"
            value={player1}
            onChange= {e => setPlayer1(e.target.value)} 
            /> 

            <label className="player-lbl">Enter 2nd player:</label>
            <input 
            type="text"
            id="player2"
            value={player2}
            onChange= {e => setPlayer2(e.target.value)} 
            />

            <button className="play-btn" type='button' onClick={submitPlayers}>Start</button>
        </div>
    );
}
export default Home;
