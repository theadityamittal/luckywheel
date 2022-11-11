import React, {useState, useEffect} from 'react'
import WheelStatic from '../img/wheel-static.png'

const Reward = ({offer, setVisibility, fullscreen}) => {
    const [coupon, setCoupon] = useState("")

    useEffect(() => {
        setCoupon(generateCoupon())
    }, [])

    const generateCoupon = () => {
        crypto.randomUUID()
        let code = crypto.randomUUID().substring(0,7).toUpperCase() // here is a static value, otherwse a random coupon based on offer will be generated
        return code
    }

    const handleClick = () => {
        navigator.clipboard.writeText(coupon);
        setVisibility(false)
    }

    const fullStyle = [
        " md:h-[55%] md:p-0 md:static md:justify-around md:w-[70%] ",
        " md:left-0 md:h-[400px] md:w-[400px] ",
        "  md:scale-100 "
    ]

  return (
    <div className="reward-page h-full  w-full z-10 flex items-center justify-center">
        <div className={"flex flex-col sm:flex-row items-center h-full w-full relative -top-[80px] sm:top-0 sm:p-[5%] sm:pl-0 gap-4" + (fullscreen ? fullStyle[0] : "")}>
            <img src={WheelStatic} className={"h-[200px] sm:h-[300px] sm:w-[300px] relative sm:-left-[100px]" + (fullscreen ? fullStyle[1] : "")} alt="Lucky Wheel" />
            <div className="rewardContainer flex flex-col justify-between text-center gap-6 max-w-sm absolute top-[40%] sm:static sm:top-0">
                <p className='text-xl font-extrabold'>Congrats! You won:</p>
                <p className='text-3xl font-extrabold animate-pulse'>{offer}</p>
                <div className={'flex gap-2 items-center h-50 bg-black/20 rounded scale-75' + (fullscreen ? fullStyle[2] : "")}>
                    <div className='flex justify-between items-center w-full h-[60px]'>
                        <div className='flex justify-center items-center w-full p-3'>
                            <span className='text-4xl text-white uppercase font-extrabold'>{coupon}</span>
                        </div>
                        <div onClick={() => {navigator.clipboard.writeText(coupon); document.getElementById('copybutton').innerHTML = "Copied!"}} className='min-w-[110px] bg-green-800 h-full rounded-r px-4 flex items-center justify-center cursor-pointer p-3 uppercase text-white hover:text-green-800 font-bold transition-colors duration-300 hover:bg-white border-green-800 border-solid border-4'>
                            <span id='copybutton'>Copy</span>
                        </div>
                    </div>
                </div>
                <button onClick={handleClick} className={'text-2xl font-bold bg-green-800 rounded-full text-white py-4 scale-75 transition-colors duration-300 hover:bg-white border-green-800 border-solid border-4 hover:text-green-800' + (fullscreen ? fullStyle[2] : "")}>{"Close Panel & Copy"}</button>
                <p className='text-[10px] italic text-center text-green-800 w-full mt-2 break-normal'>*You can claim your coupon for 10 minutes only!"</p>
            </div>
        </div>
    </div>
  )
}

export default Reward