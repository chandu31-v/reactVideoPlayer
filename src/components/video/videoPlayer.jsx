import React from "react";
import ReactPlayer from 'react-player'


function Video({url}) {


    return (<>
        <div className="w-full">
            <ReactPlayer url={url} controls={true} width={'100%'} height={'100%'} />
        </div>
    </>)
}

export default Video
