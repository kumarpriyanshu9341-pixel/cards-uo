import React from 'react'

import RightCardContent from './RightCardContent';


const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden w-[75vw] sm:w-64 md:w-70 relative rounded-3xl md:rounded-4xl' >
      <img className='h-full w-full object-cover ' src={props.img} alt="" />

      <RightCardContent tag={props.tag} id={props.id} color={props.color} />
    </div>

  )
}

export default RightCard
