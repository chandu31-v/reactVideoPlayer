import React, { useContext } from "react";
import { VideoContext } from "../../App";

function ListComp({ title, id, thumb }) {

    const { list, setList } = useContext(VideoContext)

    //on click, index value is updated to clicked component index
    const handleClick = () => {
        //console.log(list.listData[id].sources[0])
        setList({ ...list, index: id })
    }

    return (<>
        <div className={`w-full h-full text-gray-200 px-2 hover:bg-gray-500 font-semibold ${id === list.index ? "bg-gray-400" : "bg-slate-600"} rounded `}>
            <button onClick={handleClick} className="w-full h-full">
                <div className="flex w-full">
                    <div className="w-2/5">
                        <img src={thumb} alt="img" width="90px" className="rounded" />
                    </div>
                    <div className="w-3/5">
                        {title}
                    </div>
                </div>
            </button>
        </div>
    </>)
}

export default ListComp
