import React from "react";
import ReactPlayer from 'react-player'


function Video({ url , index }) {

    const videoAutoPlay = ()=>{
        
    }

    return (<>
        <div className="w-full">
            <ReactPlayer url={url} controls={true} width={'100%'} height={'100%'} playing={true} onEnded={videoAutoPlay} />
        </div>
    </>)
}

export default Video
