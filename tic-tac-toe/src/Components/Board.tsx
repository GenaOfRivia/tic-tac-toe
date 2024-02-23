import React from 'react'
import Square from './Square'

interface Props {
    onClick: (index:number) => void;
}




const Board = ({onClick}: Props) => {
  return (
    <div>
        <div>
            <Square onClick = { () => onClick(0)}/>
            <Square onClick = { () => onClick(1)}/>
            <Square onClick = { () => onClick(2)}/>
        </div>
        <div>
            <Square onClick = { () => onClick(3)}/>
            <Square onClick = { () => onClick(4)}/>
            <Square onClick = { () => onClick(5)}/>
        </div>
        <div>
            <Square onClick = { () => onClick(6)}/>
            <Square onClick = { () => onClick(7)}/>
            <Square onClick = { () => onClick(8)}/>
        </div>
    </div>
  )
}

export default Board