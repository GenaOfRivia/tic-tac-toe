import React from 'react'

interface Props {
    value: string,
    onClick: () => void
}



const Square = ({onClick,value}: Props) => {
  return (
    <button type='button' onClick = {onClick} style={{width: '200px', height: '200px'}}>
        {value}
    </button>
  )
}

export default Square