import React from 'react'

interface Props {
    onClick: () => void
}



const Square = ({onClick}: Props) => {
  return (
    <button type='button' onClick = {onClick}>
        X
    </button>
  )
}

export default Square