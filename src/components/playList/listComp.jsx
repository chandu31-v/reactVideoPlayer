import React,{useContext} from "react";
import { VideoContext } from "../../App";

function ListComp({ videoUrl , title , description , index }) {

    const {url,setUrl} = useContext(VideoContext)

    const handleClick = (url)=>{
        setUrl(url)
    }

    return (<>
        <div className="w-full h-16 bg-slate-600 border-[1px] border-black">
            <button onClick={()=>handleClick(videoUrl)}>
                {title}
                {/* {description} */}
            </button>
        </div>
    </>)
}

export default ListComp
