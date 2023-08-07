import React from 'react';
import { Link } from 'react-router-dom';

const Suggestion = ({info}) => {
    
    const{snippet,statistics} = info;
    const {thumbnails,publishedAt,channelTitle,title} = snippet;
    const {viewCount}= statistics;
  
    return (
    
         <>     
           <Link to={"/watch?v="+info.id} >
                <div className=" flex justify-between gap-2 mt-2 items-center bg-slate-100 rounded-xl">
                    <div className=' basis-2/4 rounded-xl'>
                        <img className='rounded-xl' src={thumbnails.medium.url} alt='thumbnail'/>
                    </div> 

                    <div className=' basis-2/4'>
                        <ul >
                            <li className=' text-xs'>{title}</li>
                            <li className=' text-xs'>{channelTitle}</li>
                            <li className=' text-xs'>Views :{viewCount}</li>
                            <li className=' text-xs'>Pubished : {publishedAt.slice(0,10)}</li>
                        </ul>
                    </div>              
                    
                </div>
            </Link>  
        </>
   
  )
}

export default Suggestion;
