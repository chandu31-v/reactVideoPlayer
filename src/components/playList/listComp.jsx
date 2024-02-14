import React,{useContext, useState} from "react";
import { VideoContext } from "../../App";

function ListComp({ title , id }) {

    const {list,setList} = useContext(VideoContext)
    const [bg,setBg] = useState(list.index)

    const handleClick = ()=>{
        console.log(list.listData[id].sources[0])
        setList({...list,index:id})
    }

    return (<>
        <div className={"w-full h-16 bg-slate-600 border-[1px] border-black"+(id===list.index?"bg-slate-500":"")}>
            <button onClick={handleClick} className="w-full h-full">
                {title}
                {/* {description} */}
            </button>
        </div>
    </>)
}

export default ListComp
