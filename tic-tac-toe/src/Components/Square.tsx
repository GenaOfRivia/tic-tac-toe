import React from 'react'

interface Props {
    value: string,
    onClick: () => void
}



const Square = ({onClick,value}: Props) => {
  return (
    <button type='button' onClick = {onClick}>
        {value}
    </button>
  )
}

export default Square