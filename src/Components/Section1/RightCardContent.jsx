import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

{/* <FontAwesomeIcon icon={faArrowRight} /> */}

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-4 md:p-6 flex flex-col justify-between' >
        <h2 className='border-2 border-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-black bg-white font-semibold text-lg md:text-xl'>{props.id+1}</h2>
        <div>
          <p className='text-white text-base md:text-lg font-bold line-clamp-3 md:line-clamp-none'>lorem150 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatex</p>
          <div className='mt-3 md:mt-4 flex items-center gap-2 md:gap-4 flex-wrap' >
            <button style={{ backgroundColor: props.color }} className='text-white border-2 border-white hover:bg-white hover:text-black py-1.5 md:py-2 px-3 md:px-4 rounded-full text-sm md:text-base'>{props.tag}</button>
            <button className='text-white bg-transparent border-2 border-white hover:bg-white hover:text-black py-1.5 md:py-2 px-3 md:px-4 rounded-full'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
