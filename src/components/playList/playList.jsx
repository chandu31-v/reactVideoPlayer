import React, { useContext, useRef, useState } from "react";
import ListComp from "./listComp";
import { VideoContext } from "../../App";

function PlayList() {

    
    const {list,setList} = useContext(VideoContext)

    //ref -  refers index value, to swap each other place 
    const drag = useRef(0)
    const dragOver = useRef(0)

    const handleDragDrop = () => {

        //swap the list , using temp variable
        const listTemp = [...list.listData]
        const temp = listTemp[drag.current]
        listTemp[drag.current] = listTemp[dragOver.current]
        listTemp[dragOver.current] = temp

        //reset state to updated list
        setList({...list,listData:listTemp})
    }

    return (<>


        <div className='w-full h-full'>
            {list.listData.map((value, index) => {
                return <div key={value.title} 
                            draggable 
                            onDragStart={()=>drag.current=index}
                            onDragEnter={()=>dragOver.current=index}
                            onDragEnd={handleDragDrop}
                            onDragOver={(e)=>e.preventDefault()}
                            className="h-1/6 pt-2"
                            >
                    <ListComp key={value.title} id={index} title={value.title} thumb={value.thumb} />
                </div>

            })}
        </div>

        
    </>)
}

export default PlayList
