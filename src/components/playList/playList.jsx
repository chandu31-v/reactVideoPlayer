import React, { useRef, useState } from "react";
import listData from "./playList.json"
import ListComp from "./listComp";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function PlayList() {

    //console.log(listData['videos'][0])
    const [list, setList] = useState(listData['videos'])
    const drag = useRef(0)
    const dragOver = useRef(0)

    const handleDragDrop = (droppedItem) => {

        const listTemp = [...list]
        const temp = listTemp[drag.current]
        listTemp[drag.current] = listTemp[dragOver.current]
        listTemp[dragOver.current] = temp
        setList(listTemp) 

        // // Ignore drop outside droppable container
        // if (!droppedItem.destination) return;
        // var updatedList = [...list];
        // // Remove dragged item
        // const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        // // Add dropped item
        // updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        // // Update State
        // setList(updatedList);
    }

    return (<>


        <div className='w-full bg-slate-300 list-container'>
            {list.map((value, index) => {
                return <div key={value.title} 
                            draggable 
                            onDragStart={()=>drag.current=index}
                            onDragEnter={()=>dragOver.current=index}
                            onDragEnd={handleDragDrop}
                            onDragOver={(e)=>e.preventDefault()}
                            >
                    <ListComp key={value.title} id={index} videoUrl={value.sources[0]} title={value.title} description={value.description} />
                </div>

            })}
        </div>

        {/* <DragDropContext onDragEnd={handleDragDrop}>
            <Droppable droppableId="list-container">
                {(provided) => (
                    <div
                        className="list-container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >

                        <div className='w-full bg-slate-300 list-container'>
                            {list.map((value, index) => {
                                return <Draggable key={value.title} id={value.title} draggableId={value.title} index={index}>
                                    {(provided) => (
                                        <div
                                            className="list-container"
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                        >
                                            <ListComp key={value.title} id={value.title} videoUrl={value.sources[0]} title={value.title} description={value.description} />
                                        </div>
                                    )}
                                </Draggable>
                            })}
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext> */}
    </>)
}

export default PlayList
