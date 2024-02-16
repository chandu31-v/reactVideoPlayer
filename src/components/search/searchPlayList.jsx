import React, { useEffect, useState } from "react";
import List from "../playList/listComp"

function SearchPlayList({ searchList }) {

    return (<>
        <div className="w-full h-full">
            {searchList.length > 0 ?

                searchList.map((list) => {
                    //console.log(list)
                    return (
                        list.title === "No search found" ? 
                            <div className="mt-4">
                                <p className="text-xl">{list.title}</p>
                            </div>
                            : <div className="h-1/6 pt-2" >
                                <List key={list.title} title={list.title} thumb={list.thumb} id={list.index} />
                            </div>
                    )
                })

                : ""}

        </div>
    </>)
}

export default SearchPlayList
