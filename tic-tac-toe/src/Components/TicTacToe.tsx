import React, { useState } from 'react'
import Board from './Board';

const TicTacToe = () => {

    const[value,setValue] = useState(Array(9).fill(null))
    const[currentPlayer,setCurrentPlayer] = useState("X")
    console.log(value);

    const handleClick = (index:number) => {
        const updateValue = [...value]
        updateValue[index] = currentPlayer
        setValue(updateValue)
        setCurrentPlayer(currentPlayer==="X"?"O":"X")
    }
  return (
    <div>
        <h1>yes</h1>
        <Board onClick = {handleClick} value = {value}/>
    </div>
  );
};

export default TicTacToe;