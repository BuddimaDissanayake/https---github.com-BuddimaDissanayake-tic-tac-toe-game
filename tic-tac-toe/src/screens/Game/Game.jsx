import React, { useEffect, useState } from "react";
import "./Game.css";
import Square from "./components/Square";
import Players from "./components/Players";
import { useLocation } from "react-router-dom";

const Game = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [selectedUser, setSelectedUser] = useState("");
  // const [gameOver, setGameOver] =useState(true);
  // const [checkSquare, setCheckSquare] = useState('');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const users = [
    {
      id: 0,
      name: queryParams.get("data1"),
    },
    {
      id: 1,
      name: queryParams.get("data2"),
    },
  ];

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // const checkWinning = () => {
  //     for(let i = 0 ; i < winningConditions.length ; i++ ){
  //         const [a,b,c] = winningConditions[i] ;
  //         {grid[a] === grid[b] && grid[b] === grid[c] && ) } ;
  //         }
  // }

  const pressSquare = (index) => {
    if (grid[index] == null) {
      setGrid((prevState) => {
        prevState[index] = selectedUser.id === 1 ? "x" : "o";
        setSelectedUser(users[selectedUser.id === 1 ? 0 : 1]);
        return [...prevState];
      });
    }
  };

  const changeUser = () => {
    const min = 0;
    const max = 1;

    const findRandomUser = Math.random() * (max - min) + min;

    setSelectedUser(users[Math.round(findRandomUser)]);
  };

  const resetGame = () => {
    setGrid(Array(9).fill(null));
    changeUser();
  };

  useEffect(() => {
    changeUser();
  }, []);

  return (
    <div className="container">
      <p className="topic">Tic Tac Toe</p>
      <Players users={users} selectedUser={selectedUser} />
      <div className="board">
        {grid.map((item, index) => (
          <Square
            key={index.toString()}
            index={index}
            value={item}
            pressSquare={() => pressSquare(index)}
          />
        ))}
      </div>
      <button className="resetbtn" onClick={resetGame}>
        RESTART
      </button>
    </div>
  );
};

export default Game;
