import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_KEY,YOUTUBE_WATCH_URL } from '../utils/constants';
import { YOUTUBE_URL } from '../utils/constants';
import { closeMenu } from '../utils/sideBarSlice';
import { useDispatch } from 'react-redux';
import Suggestion from './Suggestion';
import Details from './Details';

const Watch = () => {
  
      const dispatch = useDispatch();
      const [searchparam] = useSearchParams();
      const [detail,setDetail] = useState([]);
      const [videos,setVideos] = useState([]);
      const [fetchError,setFetchError] = useState(null);
      const [isLoading,setIsLoading] = useState(true);
      const [videofetchError,setVideoFetchError] = useState(null);
      const [isLoadings,setIsLoadings] = useState(true);

      
      useEffect(()=>{
        getVideo()
        getVideoList()
        dispatch(closeMenu())
      },[])

      const getVideo= async()=>{
        try{
          const videoData = await fetch(YOUTUBE_WATCH_URL+searchparam.get('v')+"&key="+API_KEY);
          if(!videoData.ok) throw Error ("Data Not Found")
          const videolink = await videoData.json();
          setDetail(videolink.items);
          setFetchError(null)  
        } 
        catch (error){
          setFetchError(error.message)
        }
        finally{
          setIsLoading(false)
        }
      }
      const getVideoList = async()=>{
        try{
            const videoData =  await fetch(YOUTUBE_URL);
            if(!videoData.ok) throw Error("Data not Found")
            const videoList = await videoData.json();        
            setVideos(videoList.items);
            setVideoFetchError(null)
        }
        catch(error){
            setVideoFetchError(error.message)
        }
        finally{
            setIsLoadings(false)
        }
        
    }
  return (
    <>
   
      <div className=' md:flex gap-x-5'>
          <div className=''>
            {fetchError && <p>{`Error:${fetchError}`}</p>}
            {isLoading && <p>Loading..</p>}       
            { !isLoading && !fetchError && <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+searchparam.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
            {
              detail.map((info)=>{
                return <Details id= {info.id} info={info} />
              })
                
            }            
          </div>
          
          <div className=' flex '>
            <div className=' h-screen overflow-y-auto'>
              {videofetchError && <p>{`Error:${videofetchError}`}</p>}
              {isLoadings && <p>Loading..</p>}    
              { !videofetchError && !isLoadings && videos.map((video)=>{
                return   <Suggestion key={video.id} info={video}/>
              })}
            </div>          
          </div>
      </div>


    </>
  )
}

export default Watch;
