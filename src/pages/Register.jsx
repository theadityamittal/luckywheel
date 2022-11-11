import React from 'react'
import WheelStatic from '../img/wheel-static.png'
import Dialer from '../img/phone.png'
import Envelope from '../img/email.png'
import Cancel from '../img/cross.svg'

const Register = ({setRoute, setVisibility, fullscreen}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailId = e.target[0].value
        const mobile = e.target[1].value
        const promos = (e.target[2].value === 'on' ? true : false)
        console.log(emailId, mobile, promos)
        // fetch('submitURL', {
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         email: emailId,
        //         phone: mobile,
        //         promotions: promos
        //     })
        // })
        // .then(res => {
        //     console.log(res)
        //     alert("Successful")
        //     setRoute("spin")
        // })
        // .catch(err => {
        //     alert(err)
        // })
        setRoute("spin") // not present in case of api call
    }

    const fullStyle = [
        " lg:h-[55%] lg:p-0 lg:static lg:justify-around lg:w-[70%] ",
        " lg:left-0 lg:h-[400px] lg:w-[400px] ",
        " lg:max-w-[450px]"
    ]

  return (
    <div className="register-page h-full w-full z-10 flex items-center justify-center">
        <div className={"flex flex-col sm:flex-row items-center h-full w-full relative -top-[80px] sm:top-0 sm:p-[5%] sm:pl-0 gap-4" + (fullscreen ? fullStyle[0] : "")}>
            <img src={WheelStatic} className={"h-[200px] sm:h-[300px] sm:w-[300px] relative sm:-left-[100px]" + (fullscreen ? fullStyle[1] : "")} alt="Lucky Wheel" />
            <div className={"formContainer px-[5%] mx-5 w-full mt-[10%] sm:p-0 sm:m-0" + (fullscreen ? fullStyle[2]: "")}>
                <form onSubmit={handleSubmit} className='flex flex-col justify-between gap-4'>
                    <span className='text-3xl font-extrabold leading-snug'>This is how EngageBud looks like in action!</span>
                    <div className='flex gap-8 items-center h-[60px] bg-white py-2 px-4 rounded-t border-b-2 border-emerald-700 transition duration-200 hover:bg-gray-200'>
                        <img src={Envelope} className="h-[15px]" alt="envelope"/>
                        <div className='flex flex-col justify-center items-start w-full'>
                            <label htmlFor='emailid' className='text-gray-600 text-sm'>Email:</label>
                            <input type="email" className='bg-transparent w-full outline-none text-base' id="emailid" placeholder='joe@gmail.com' required/>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center h-[60px] bg-white py-2 px-4 rounded-t border-b-2 border-emerald-700 transition duration-200 hover:bg-gray-200'>
                        <img src={Dialer} className="h-[15px]" alt="envelope" />
                        <div className='flex flex-col justify-center items-start w-full'>
                            <label htmlFor='phone' className='text-sm text-gray-600'>Phone Number:</label>
                            <input type="tel" className='bg-transparent w-full outline-none text-base' id="phone" placeholder='+91 98256 XXXXX'/>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center h-50 bg-transparent py-2 px-4 rounded border-2 border-black'>
                        <input type="checkbox" id="promotion" defaultChecked className='h-[60px] w-[25px] accent-green-800'/>
                        <label htmlFor="promotion" className='text-xs text-gray-600'>I agree to receiving recurring automated messages at the email and/or number I have provided.<br/>Consent is not a condition to purchase.</label>
                    </div>
                    <input id='formsubmit' type="submit" className='text-xl font-bold bg-green-800 rounded-full text-white py-4 cursor-pointer transition-colors duration-300 hover:bg-white border-green-800 border-solid border-4 hover:text-green-800' value='Try your luck' />
                </form>
                <p className='text-xs italic text-center text-gray-600 w-full mt-2 break-normal'>*You can spin the wheel only once!<br/>*If you win, you can claim your coupon for 10 minutes only!"</p>
                <div className='mt-5 text-md font-bold flex justify-center align-top'>
                    <div onClick={() => {setVisibility(false)}} className='flex flex-row-reverse items-center gap-1 cursor-pointer transition hover:scale-105'>
                        <img src={Cancel} className='h-[30px] w-[30px]' alt="cancel"/>
                        <span>No I don't feel lucky</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register