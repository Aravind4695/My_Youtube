import { FaBars, FaYoutube, FaMicrophone, FaSistrix, FaEllipsisVertical, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sideBarSlice";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_URL } from "../utils/constants";
 
const Header =()=>{
   
     const dispatch = useDispatch();
     const [query,setQuery]=useState('');
     const [suggestions,setSuggessition] = useState([]);
     const [fetchError,setFetchError] = useState(null);
     const [showSuggestion,setShowSuggestion] = useState(false);

     const toggleSidebar = ()=>{
        dispatch(toggleMenu())
    }
     
     const handleChange = (e)=>{
        setQuery(e.target.value)
     }

     useEffect(()=>{
        const timer = setTimeout(() => {
            getSuggestions();
        },500);
        return ()=>{clearTimeout(timer)} 
     },[query])

     const getSuggestions = async ()=>{
       try{
            const responsed = await fetch (SEARCH_SUGGESTION_URL+query)
            if(!responsed.ok) throw Error ("Data Not Found")
            const searchList = await responsed.json()

            setSuggessition(searchList[1])
            setFetchError(null)
       }
       catch(error){
            setFetchError(error.message)
       }
     }

    return (
     <>
        <header className=" mt-4 md:flex  items-center justify-between max-w-7xl m-auto  md:first-line:mt-5">
            <div className=" basis-3/4 flex justify-evenly ml-2">
                <div className=" basis-1/4 flex items-center"> 
                    <button onClick={()=>toggleSidebar()}  className=" mr-3"><FaBars/></button>                             
                    <Link to='/'>
                        <button onClick={()=>toggleSidebar()} className=" flex gap-1 items-center "><FaYoutube/> YouTube<sup>IN</sup></button>
                    </Link>
                </div>

                <div className=" basis-3/4 flex w-9/12 justify-center"> 
                    
                    <input onChange={(e)=>handleChange(e)} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)} value={query} className=" w-6/12 rounded-bl-xl rounded-tl-xl border-2 border-inherit bg-slate-50 pl-2" type="text" placeholder="search" />
                    <button className=" rounded-br-xl rounded-tr-xl border-2 border-inherit bg-slate-50 p-1 px-2 border-l-0">
                        <FaSistrix/>
                    </button>
                    <button className=" mx-4 bg-slate-50  rounded-3xl  p-2">
                        <FaMicrophone/>
                    </button>
            
                </div>
            </div>
            <div className=" hidden md:flex">
                <button className=" mr-2">
                   <FaEllipsisVertical/>
                </button>
                <button className=" flex items-center border-2 border-inherit rounded-3xl p-2 gap-1">
                    <FaRegUser/> Sign in
                </button>
            </div>
        </header>
        <div className=" absolute left-96 w-1/3 bg-white rounded-2xl ">               
                    <ul>
                        {fetchError && <p>{`Error:${fetchError}`}</p>}
                        {
                           showSuggestion && suggestions.map((element,index)=>{
                                return <li className=" flex gap-x-4 items-center p-2 hover:bg-slate-500" key={index}> <FaSistrix/>{element}</li>
                            })
                        }
                    </ul>
              
        </div>
     </>
    )
}
export default Header;