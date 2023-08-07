import { Link } from "react-router-dom";
 
const Video = ({info})=>{
    const{snippet,statistics} = info;
    const {thumbnails,publishedAt,channelTitle,title} = snippet;
    const {viewCount}= statistics
    return(
         <> 
           <Link to={"/watch?v="+info.id}>      
            <div className=" md:h-80 border-2 rounded-xl ">
                <Link to={"/watch?v="+info.id} ><img className=" w-screen md:max-w-full" src={thumbnails.medium.url} alt="thumnail"/></Link>
                <ul>
                    <li className="font-bold">{title}</li>
                    <li className="font-bold">{channelTitle}</li>
                    <li>{viewCount} Views</li>
                    <li>Pubished : {publishedAt.slice(0,10)}</li>
                </ul>
            </div>
          </Link> 
         </>
    )
}
export default Video;