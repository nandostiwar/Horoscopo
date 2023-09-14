import React from 'react'
import './Card.css'

const Card = ({titulo="PorDefecto"}) => {
  return (
    <div className='Card'>
        {titulo}
    </div>
  )
}

export default Card