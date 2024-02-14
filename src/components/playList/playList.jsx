import React from "react";
import listData from "./playList.json"
import ListComp from "./listComp";

function PlayList() {

    //console.log(listData['videos'][0])

    return (<>
        <div className='w-2/6 bg-slate-300 overflow-scroll'>
            {listData['videos'].map((value)=>{
                return <ListComp key={value.title} url={value.sources[0]} title={value.title} description={value.description} />
            })}
        </div>
    </>)
}

export default PlayList
