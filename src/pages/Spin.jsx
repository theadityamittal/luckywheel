import React, { useEffect, useState } from 'react'
import Wheel from '../img/wheel@2x.png'
import RewardPointer from '../img/pointer.svg'

const offers = {
  0: "30% sitewide off",
  1: "Hot chocolate with free tea",
  2: "Free 50g tea on purchase of Rs. 500",
  3: "But 2 effervescent tablets & get 1 free",
  4: "Free Coffee Mug on purchase worth 1000+",
  5: "Buy 1 get 1 free"
}

const Spin = ({setOffer, setRoute}) => {
  const [rotate, setRotate] = useState(-1)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if(rotate === 0 && duration === 0){
      let min = 900, max = 1800;
      let rand = Math.floor(Math.random() * (max - min + 1) + min);
      rand = rand - (rand % 60)
      let milisec = rand * 4 + 500
      setRotate(rand)
      setDuration(rand * 4)
      var sector = rand % 360
      setTimeout(() => {
        setOffer(offers[sector/60])
        setRoute("reward")
      }, milisec); 
    }
  }, [rotate, duration, setOffer, setRoute])

  const spinTheWheel = () => {
    setDuration(0)
    setRotate(0)
  }

  return (
    <div className="z-10 flex flex-col justify-center items-center w-full h-full">
      <div className='w-full h-[400px] relative flex flex-col justify-center items-center scale-75 sm:scale-100'>
        <img src={Wheel} alt="wheel" className='wheel absolute ease-in-out max-w-[450px]' style={
          {
            transform: 'rotate(' + rotate + 'deg)',
            transition: duration + 'ms'
          }
        }/>
        <img src={RewardPointer} alt="pointer" className='absolute h-[70px]'/>
      </div>
      <button onClick={spinTheWheel} className='z-20 w-[150px] text-base font-bold bg-green-800 rounded-full text-white py-3 mt-10 transition-colors duration-300 hover:bg-white border-green-800 border-solid border-4 hover:text-green-800'>SPIN</button>
    </div>
  )
}

export default Spin