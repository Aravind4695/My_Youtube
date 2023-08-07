import { useEffect,useState } from 'react';
import { YOUTUBE_URL } from '../utils/constants';
import Video from './Video';
const VideoContainer = () => {
    
    const [videos,setVideos] = useState([]);
    const [fetchError,setFetchError] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        getVideoList();
    },[])

    const getVideoList = async()=>{
        
        try{
            const videoData =  await fetch(YOUTUBE_URL);
            if(!videoData.ok) throw Error("Data not Found")
            const videoList = await videoData.json();        
            setVideos(videoList.items);
            setFetchError(null)
        }
        catch(error){
            setFetchError(error.message)
        }
        finally{
            setIsLoading(false)
        }
        
    }
    
  return (
    <>
        {isLoading && <p> Loading...</p>}
        {fetchError && <p>{ `Error : ${fetchError}` }</p>}
        {            
           !isLoading && !fetchError && videos.map((video)=>{
                return(

                    <Video key={video.id} info={video}/>
                )
            })
        }
        
    </>

  )
}

export default VideoContainer
