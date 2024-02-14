import React, { useContext, useRef, useState } from "react";
import ListComp from "./listComp";
import { VideoContext } from "../../App";

function PlayList() {

    //console.log(listData['videos'][0])
    //const [list, setList] = useState(listData['videos'])
    const {list,setList} = useContext(VideoContext)
    const drag = useRef(0)
    const dragOver = useRef(0)

    const handleDragDrop = () => {

        const listTemp = [...list.listData]
        const temp = listTemp[drag.current]
        listTemp[drag.current] = listTemp[dragOver.current]
        listTemp[dragOver.current] = temp
        setList({...list,listData:listTemp})
    }

    return (<>


        <div className='w-full bg-slate-300'>
            {list.listData.map((value, index) => {
                return <div key={value.title} 
                            draggable 
                            onDragStart={()=>drag.current=index}
                            onDragEnter={()=>dragOver.current=index}
                            onDragEnd={handleDragDrop}
                            onDragOver={(e)=>e.preventDefault()}
                            >
                    <ListComp key={value.title} id={index} title={value.title} />
                </div>

            })}
        </div>

        
    </>)
}

export default PlayList
