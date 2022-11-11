import React, { useState, useEffect} from 'react'
import Register from '../pages/Register'
import Spin from '../pages/Spin'
import Reward from '../pages/Reward'
import header from '../img/header-icons.png'
import expand from '../img/expand.png'
import footer from '../img/footer-icons.png'

const Sidebar = ({visible, setVisibility}) => {
    const [offer, setOffer] = useState("No offer")
    const [route, setRoute] = useState("register")
    const [movein, setMovein] = useState("")
    const [fullscreen, setFullscreen] = useState(false)
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

    useEffect(() => {
        if(movein === ""){
            setMovein(" translate-x-full")
        }
        
    }, [visible, movein])

    useEffect(() => {
        if(dimensions.width < 1240){
            setFullscreen(true)
            window.removeEventListener("resize", handleResize, false);
        }
    }, [dimensions])

    const expandstyle = {
        width: '100vw',
        left: '-100vw'
    }

    const expandSidebar = () => {
        setFullscreen(true)
    }

    return(
        <div 
            id='sidebar' 
            className={"overscroll-none sidebar fixed -left-[50vw] z-30 h-screen w-[50vw] flex flex-col items-center justify-center transition-transform duration-500" + movein}
            style={fullscreen ? expandstyle : null}
        >
            <img src={header} className="header opacity-50 w-full" alt="leaves and flowers"/>
            {
                route === "register"
                ? <Register setRoute={setRoute} setVisibility={setVisibility} fullscreen={fullscreen}/>
                : (
                    route === "spin"
                    ? <Spin setOffer={setOffer} setRoute={setRoute}/>
                    : <Reward offer={offer} setVisibility={setVisibility} fullscreen={fullscreen}/>
                )
            }
            <div onClick={expandSidebar} className={"expand-button flex items-center justify-end h-[60px] w-[60px] px-1 py-3 absolute -right-[30px]  cursor-pointer rounded-full" + (fullscreen ? " hidden" : "")}>
                <img src={expand} alt="expand" className='h-[30px] animate-pulse'/>
            </div>
            <img src={footer} className="footer opacity-50 w-full" alt="leaves and flowers"/>
        </div>
    )
}

export default Sidebar