import Header from "../Header/Header";
import Sidebar from "../sidebar/Sidebar"
import { Outlet } from "react-router-dom";

const Main = ()=>{
    return(
        <>
        <Header/>
        <div className=" md:flex flex-row mt-10 max-w-7xl m-auto">
            
            <div className="hidden md:flex basis-1/4">
               <Sidebar />
            </div>
            <div className=" md:flex-1">
                <Outlet/>
            </div>          
            
        </div>  
        </>
    )
}
export default Main;