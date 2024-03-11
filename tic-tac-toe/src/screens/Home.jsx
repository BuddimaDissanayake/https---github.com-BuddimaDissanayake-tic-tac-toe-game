import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const navigate = useNavigate();

  const submitPlayers = (e) => {
    e.preventDefault();
    // if (player1.trim() === "" || player2.trim() === "") {
    //   alert("Enter player names");
    // }
    const encodedPlayer1 = encodeURIComponent(player1.trim());
    const encodedPlayer2 = encodeURIComponent(player2.trim());
    if (encodedPlayer1 && encodedPlayer2) {
      const queryString = `/game?data1=${encodedPlayer1}&data2=${encodedPlayer2}`;
      navigate(queryString);
    } else {
      alert("please enter player names!");
    }
  };

  return (
    <div className="container">
        <h1>Tic Tac Toe</h1>
      <div className="input-container">
        <div className="input">
        <label className="player-lbl">Enter 1st player:</label>
        <input
        className="inputField"
          type="text"
          id="player1"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          required
        />
        </div>
        <div className="input">
        <label className="player-lbl">Enter 2nd player:</label>
        <input
        className="inputField"
          type="text"
          id="player2"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        /></div>
      </div>

      <button className="play-btn" type="button" onClick={submitPlayers}>
        PLAY!
      </button>
    </div>
  );
};
export default Home;
