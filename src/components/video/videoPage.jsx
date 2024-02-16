import React, { useEffect,useContext, useState } from "react";
import Video from "./videoPlayer"
import { VideoContext } from "../../App";

function VideoPage() {

    const {list,setList} = useContext(VideoContext)
    const [url,setUrl] = useState()

    //trigerred when index values is updated or Playlist value is shuffled
    useEffect(()=>{
        setUrl(list.listData[list.index].sources[0])

    },[list.index,list.listData])

    return (<>
        <div className='flex flex-col w-full h-full justify-center items-center mt-4 sm:mt-0'>
            <div className='flex justify-center items-center w-[90%] h-fit sm:p-2 sm:rounded sm:bg-gradient-to-l from-gray-500 to-gray-600'>
                <Video url={url} />
            </div>
            <div className="w-[90%] mt-6">
                <h1 className="text-2xl font-semibold text-gray-300">{list.listData[list.index].title}</h1>
            </div>
        </div>
    </>)
}

export default VideoPage
