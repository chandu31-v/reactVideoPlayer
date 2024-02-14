import React, { useEffect,useContext } from "react";
import Video from "./videoPlayer"
import { VideoContext } from "../../App";

function VideoPage() {

    const {url,setUrl} = useContext(VideoContext)
    useEffect(()=>{
        setUrl(url)
        //console.log(url)
    },[url])

    return (<>
        <div className='flex w-full h-full justify-center items-center'>
            <div className='flex justify-center items-center w-[90%] h-full'>
                <Video url={url} />
            </div>
        </div>
    </>)
}

export default VideoPage
