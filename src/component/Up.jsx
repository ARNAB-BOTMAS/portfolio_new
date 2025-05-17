import { useEffect, useState } from "react";
import '../sass/Up.scss';

const Up = () =>{
    const [isHome, setIsHome] = useState(false);
    const gotoTop = () =>{
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }
    const listenToScroll = () =>{
        let heightToHidden = 200;
        const windowScroll = 
            document.body.scrollTop || document.documentElement.scrollTop;
        if(windowScroll > heightToHidden){
            setIsHome(true);
        }else{
            // setIsAbout(true);
            setIsHome(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, [])
    return(
        <div className={`top ${isHome ? 'show' : ''}`} onClick={gotoTop}>
            {/* <i className="fa-solid fa-chevron-down"></i> */}
            <ion-icon name="chevron-down-sharp"></ion-icon>
        </div>
    );
}
export default Up;