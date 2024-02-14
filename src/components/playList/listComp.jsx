import React from "react";

function ListComp({ url, title , description }) {

    const handleClick = (url)=>{
        console.log(url)
    }

    return (<>
        <div className="w-full h-16 bg-slate-600 border-[1px] border-black">
            <button onClick={()=>handleClick(url)}>
                {title}
                {/* {description} */}
            </button>
        </div>
    </>)
}

export default ListComp
