import React, { useEffect, useState } from "react";
import './Game.css';
import Square from './components/Square';
import Players from "./components/Players";

const users = [
    {
      id: 0,
      name: "Buddima",
    },
    {
      id: 1,
      name: "Eranga",
    },
  ];

const Game = () => {
    const [grid, setGrid] = useState(Array(9).fill(null));
    const [selectedUser, setSelectedUser] = useState('');

    const pressSquare = (index) => {
        if(grid[index] == null){
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

    return(
        <div className="container">
            <p className="topic">Tic Tac Toe</p>
            <Players users={users} selectedUser={selectedUser}/>
            <div className="board">
                {grid.map((item,index) => (<Square 
                key={index.toString()} 
                index={index} 
                value={item}
                pressSquare={() => pressSquare(index)}/>))}
            </div>
            <button className="resetbtn" onClick={resetGame}>RESTART</button>
        </div>
    );
}

export default Game;