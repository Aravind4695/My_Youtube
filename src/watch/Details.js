import { FaShare, FaXmark, FaRegBell, FaEllipsis, FaRegThumbsDown, FaRegThumbsUp, FaThumbsUp} from "react-icons/fa6";
import facebook from '../Asset/facebook (1).png';
import whatsup from '../Asset/whatsapp.png';
import embed from '../Asset/embeb.png';
import Comment from './Comment';
import { COMMENTS_URL } from '../utils/constants';
import { useEffect, useState } from 'react';

const Details = ({info}) => {
     
      const{snippet,statistics}=info;
      const{title,channelTitle,publishedAt}=snippet;
      const{viewCount,likeCount}=statistics;
      
      const [count,setCount] = useState(likeCount);
      const [subs,setSubs] = useState(false);
      const [likes,setLike] = useState(false);
      const [popup,setPopoup] = useState(false);
      const [comments,setComments] = useState([]);
      const [open,setOpen] = useState(false);

      useEffect(()=>{
        commented();
      },[])

      const unSubscribed = ()=>{
        setSubs(!subs);
      }
      const like = ()=>{
        setCount(Number(count)+1);
        setLike(true);
      }      
      const unLike = ()=>{
        setCount(Number(count)-1);
        setLike(false);
      }
      const share = ()=>{
        setPopoup(!popup)
      }
      const commented = async()=>{
        const response = await fetch(COMMENTS_URL);
        const data = await response.json();
        setComments(data.items);
      }
      const openComment = ()=>{
        setOpen(!open)
      }
    
      return (
       <>
        <div className=' p-2'>
          <h2 className='font-bold'>{title}</h2>
          
          <div>          
            
            <div className=' md:flex justify-evenly items-center mt-2'>
              <div className=' mb-2'>
                <h3 className='font-medium'>{channelTitle}</h3>               
              </div>
             <div className=' flex justify-evenly gap-x-2'>
              {subs ? <button className=' flex items-center bg-slate-900 text-zinc-100 rounded-xl p-2' onClick={unSubscribed}><FaRegBell/> Subscribed</button> : <button className=' bg-slate-900 text-zinc-100 rounded-xl p-2' onClick={unSubscribed}>Subscribe</button> }
              <div className=' flex border-2 bg-slate-300 rounded-xl p-2 '>                
                {likes ? <button className=' border-r-2 p-1' onClick={unLike}><FaThumbsUp/></button> : <button className=' border-r-2 p-1' onClick={like}><FaRegThumbsUp/></button>}
                <p>{count}</p>
                <button className=' border-l-2 p-1'><FaRegThumbsDown/></button>
              </div>             
              <button className='flex border-2 bg-slate-300 rounded-xl p-2  items-center ' onClick={share}><FaShare/> Share</button> 
              <button className='flex border-2 bg-slate-300 rounded-xl p-2'><FaEllipsis/></button>
            </div>
            </div>
          
              <p>{viewCount} Views</p>
              <p>published : {publishedAt.slice(0,10)} </p>  
          </div>         
        </div>
        
        {
                popup ? <div  className=' fixed w-screen h-screen left-0 right-0 top-0 bottom-0  bg-slate-500/20'>
                <div className=' flex flex-col gap-y-3  absolute top-1/4 left-96 w-1/3 bg-white box-border rounded-3xl '>
                    <div className=' flex justify-between mt-1 p-3'>
                        Share
                      <button onClick={share}><FaXmark/></button>
                    </div>
                  <div className=' flex justify-evenly items-center'>
                    <button className=' flex flex-col gap-1.5 rounded-3xl p-2 items-center bg-slate-100 text-xs'><img src={embed} className=' w-1/2' alt='embed'/> Embed</button>
                    <button className=' flex flex-col gap-1.5 rounded-3xl p-2  items-center bg-slate-100 text-xs'><img src={facebook} alt='facebook'/> Facebook</button>
                    <button className=' flex flex-col gap-1.5 rounded-3xl p-2  items-center bg-slate-100 text-xs'><img src={whatsup} alt='whatsup'/> Whatsup</button>             
                  </div>
                  <div className=' flex justify-between items-center p-3'>
                    <p className=' w-3/4 border-2 rounded-xl pl-2'>https://youtu.be/{info.id}</p> 
                    <button className=' bg-blue-800 p-3 rounded-xl'>copy</button>
                  </div>
               </div>
              </div> 
            :''}
            
            <button className=' ml-1 mb-1 p-2 text-red-100 bg-cyan-700 rounded-3xl' onClick={openComment}>Comments</button>
            
            <div className={open ? "block" : "hidden"}> 
              <h2  className='mt-6 border-b-2 p-2'>Add Comments...</h2>
              {
                comments?.map((data)=>{
                  return <Comment datas={data}/>
                })
              }
            </div>
           
            
              
        
  </>     
  )
}

export default Details;
