import React from 'react'
import Gift from '../img/gift.png'

const Website = ({setVisibility}) => {

  return (
    <>
    <div className="website w-screen h-screen relative -z-20">
    </div>
    <div className="website w-screen h-screen relative -z-20">
    </div>
    <div className="website w-screen h-screen relative -z-20">
    </div>
    <span className='text-white fixed inset-1/2 text-2xl'>Website</span>
    <img onClick={setVisibility} src={Gift} alt="gift" className='z-10 fixed h-[50px] md:h-[80px] bottom-2 left-2 animate-bounce cursor-pointer'/>
    </>
  )
}

export default Website