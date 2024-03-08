import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const navigate = useNavigate();

  const submitPlayers = (e) => {
    e.preventDefault();
    const encodedPlayer1 = encodeURIComponent(player1.trim());
    const encodedPlayer2 = encodeURIComponent(player2.trim());
    const queryString = `/game?data1=${encodedPlayer1}&data2=${encodedPlayer2}`;
    navigate(queryString);
  };

  return (
    <div className="container">
      <label className="player-lbl">Enter 1st player:</label>
      <input
        type="text"
        id="player1"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />

      <label className="player-lbl">Enter 2nd player:</label>
      <input
        type="text"
        id="player2"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />

      <button className="play-btn" type="button" onClick={submitPlayers}>
        Start
      </button>
    </div>
  );
};
export default Home;
