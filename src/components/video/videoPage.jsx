import React, { useEffect, useState } from "react";
import Video from "./videoPlayer"

function VideoPage({url}) {

    const [value,setValue] = useState(url)
    useEffect(()=>{
        setValue(url)
    },[url])

    return (<>
        <div className='flex w-4/6 h-full justify-center items-center'>
            <div className='flex justify-center items-center w-[90%] h-full'>
                <Video url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            </div>
        </div>
    </>)
}

export default VideoPage
