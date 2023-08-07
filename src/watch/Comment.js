import { FaUserLarge, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa6";

const Comment = ({datas}) => {

    const {snippet} = datas;
    const {authorDisplayName,publishedAt,textDisplay} = snippet;
   
  return (
    <div className=" flex mt-4 items-center gap-x-3">
        <div className=" border-2 rounded-full p-2 bg-slate-400">
            <FaUserLarge/>
        </div>      
      <ul className=" mt-4">
        <li className=" text-green-500">{authorDisplayName}</li>
        <li className=" text-xs">{publishedAt.slice(0,10)}</li>
        <li className=" text-amber-600">{textDisplay}</li>
        <li className="  flex  justify-between w-20 "><button><FaRegThumbsUp/></button> <button><FaRegThumbsDown/></button></li>
      </ul>
    </div>
  )
}

export default Comment;
