import React from 'react'
import Board from './Board';

const TicTacToe = () => {

    const handleClick = (index:number) => {
        console.log(index,"index");
    }
  return (
    <div>
        <h1>yes</h1>
        <Board onClick = {handleClick}/>
    </div>
  );
};

export default TicTacToe;