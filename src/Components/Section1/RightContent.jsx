import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-[65vh] md:h-full w-full md:w-2/3 md:p-6 flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-0' id='rightContent' >
      {props.Users.map(function(elem,idx){

          return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent
