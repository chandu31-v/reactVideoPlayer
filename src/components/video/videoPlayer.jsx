import React,{useContext} from "react";
import ReactPlayer from 'react-player'
import { VideoContext } from "../../App";

function Video({ url , index }) {

    const {list,setList} = useContext(VideoContext)

    //triggered when the present video is completed
    //it updates index value to +1 , to play next video in playList
    const videoAutoPlay = ()=>{
        setList({...list,index:list.index+1})
    }

    return (<>
        <div className="w-full">
            <ReactPlayer url={url} controls={true} width={'100%'} height={'100%'} playing={true} onEnded={videoAutoPlay} />
        </div>
    </>)
}

export default Video
