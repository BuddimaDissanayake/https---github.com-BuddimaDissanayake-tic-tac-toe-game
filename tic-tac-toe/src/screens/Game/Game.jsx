import React, { useEffect, useState } from "react";
import "./Game.css";
import Square from "./components/Square";
import Players from "./components/Players";
import { useLocation } from "react-router-dom";

const Game = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [selectedUser, setSelectedUser] = useState("");
  const [isWinner, setIsWinner] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  let winner = "";

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const users = [
    {
      id: 0,
      sign: "https://cdn-icons-png.flaticon.com/512/2976/2976286.png",
      name: queryParams.get("data1"),
    },
    {
      id: 1,
      sign: "https://cdn-icons-png.flaticon.com/512/3524/3524377.png",
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

  const chechWinner = (grid) => {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (grid[a] === grid[b] && grid[b] === grid[c]) {
        console.log(grid[a]);
        return grid[a];
      }
    }
  };

  const pressSquare = (index) => {
    
    
setClickCount(clickCount+1);
    
    
    if (grid[index] == null) {
      setGrid((prevState) => {
        prevState[index] = selectedUser.id === 1 ? "o" : "x";
        setSelectedUser(users[selectedUser.id === 1 ? 0 : 1]);

        winner = chechWinner(grid);
        if (winner) {
          setIsWinner(true);
        }

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
    setIsWinner(false);
    changeUser();
  };

  useEffect(() => {
    changeUser();
  }, []);

  return (
    <div className="container">
      <p className="topic">Tic Tac Toe</p>
      <Players users={users} selectedUser={selectedUser} />
      {isWinner === (false) && clickCount === 9 && <h1>Drawn!</h1> }
      {isWinner ? (
        <div className="winMessage">
          {/* <h1>Player {selectedUser.name} Wins!</h1> */}
          <h1>Good Luck!</h1>
        </div>
      ) : (
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
      )}
      <button className="resetbtn" onClick={resetGame}>
        RESTART
      </button>
    </div>
  );
};

export default Game;
