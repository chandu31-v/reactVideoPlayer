import React, { useEffect,useContext, useState } from "react";
import Video from "./videoPlayer"
import { VideoContext } from "../../App";

function VideoPage() {

    const {list,setList} = useContext(VideoContext)
    const [url,setUrl] = useState()
    useEffect(()=>{
        setUrl(list.listData[list.index].sources[0])

    },[list.index])

    return (<>
        <div className='flex w-full h-full justify-center items-center'>
            <div className='flex justify-center items-center w-[90%] h-full'>
                <Video url={url} />
            </div>
        </div>
    </>)
}

export default VideoPage
