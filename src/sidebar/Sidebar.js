
import { FaBolt, FaHouse, FaClockRotateLeft, FaSquareYoutube, FaClapperboard,
         FaRegUser,FaTruckFast,  FaTag, FaItunesNote, FaChessKnight, FaJira,
         FaRegSquarePlus, FaPersonSkiing, FaPenClip, FaRegPenToSquare, FaRegFlag, FaGear} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar =()=>{
    
    const isMenuOpen = useSelector((store)=>store.isMenuOpen)
    
    if(!isMenuOpen)
    return false;
    return(
        <>
         <div className="h-screen overflow-y-auto pr-5">
                <div className=" flex flex-col items-start border-b-2 mb-3">
                  <Link to='/'>
                    <button className="SlideButton">
                            <FaHouse/> Home
                        </button>
                  </Link> 
                  <Link to='/shorts'>
                  <button className="SlideButton"> 
                        <FaBolt/> Shorts 
                    </button>
                  </Link>
                
                  <Link to="/subscriptions">
                    <button className="SlideButton" > 
                            <FaSquareYoutube/> Subscriptions
                    </button>
                  </Link>                    
                    
                </div>
                <div className=" flex flex-col items-start border-b-2 mb-3">
                    <button className="SlideButton">
                        <FaClapperboard /> Library                
                    </button>
                    <button className="SlideButton">
                        <FaClockRotateLeft/> History
                    </button>
                </div>
                <div className=" flex flex-col justify-start border-b-2 mb-3 gap-y-3">
                    <p>Sign in to like videos, comment, and subscribe.</p>
                    <button className=" flex items-center border-2 border-inherit rounded-3xl p-2 gap-1 w-2/4 mb-3 text-center">
                        <FaRegUser/> Sign in
                    </button>
                </div>
                <div className=" flex flex-col items-start mt-3">
                    <p>Explore</p>
                    <button className="SlideButton">
                        <FaJira />Trending
                    </button>
                    <button className="SlideButton">
                    <FaTruckFast/> Shopping
                    </button>
                    <button className="SlideButton">
                        <FaItunesNote/>Music
                    </button>
                    <button className="SlideButton">
                        <FaClapperboard/>Movies
                    </button>                
                    <button className="SlideButton">
                        <FaChessKnight/>Gaming
                    </button>
                    <button className="SlideButton">
                        <FaPersonSkiing/>Sports
                    </button>
                    <button className="SlideButton">
                        <FaPenClip/>Learning
                    </button>

                </div>
                <div className="  border-t-2  mb-3">
                    <button className="SlideButton">
                        <FaRegSquarePlus/>Browse channels
                    </button> 
                </div>
                <div className=" flex flex-col items-start border-b-2 border-t-2 mt-3 mb-3">
                    <h2>More from YouTube </h2>
                    <button className="SlideButton">YouTube Premium</button>
                    <button className="SlideButton">YouTube Music</button>
                    <button className="SlideButton">YouTube Kids</button>
                </div>
                <div className=" flex flex-col items-start border-b-2 mb-3">
                    <button className="SlideButton">
                        <FaGear/>Settings
                    </button>
                    <button className="SlideButton">
                        <FaRegFlag/>Report history
                    </button>
                    <button className="SlideButton">
                        <FaTag/> Help
                    </button>
                    <button className="SlideButton">
                        < FaRegPenToSquare/>Send feedback
                    </button>
                </div>
                <div className=" flex flex-col  gap-y-3 border-b-2 mb-3">
                    <p>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers.</p>
                    <p> TermsPrivacyPolicy & SafetyHow YouTube worksTest new features.</p>
                    <p>&#169;2023 Google LLC</p>
                </div>
         </div>
            

        
        </>
    )
}
export default Sidebar;