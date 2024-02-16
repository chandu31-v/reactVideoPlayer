import React, { useState } from "react";
import VideoPlayList from "./videoPlayList"
import SearchPlayList from "../search/searchPlayList";
import Search from "../search/search"

function PlayList() {

    const [searchList, setSearchList] = useState([])

    return (<>
        <div className="w-full h-lvh">
            {/* Search input component */}
            <div className="h-[7%] sticky top-0">
                <Search setSearchList={setSearchList} />
            </div>

            {/* playlist component */}
            <div className="h-[93%]">
                {searchList.length > 0 ? <SearchPlayList searchList={searchList} /> : <VideoPlayList />}
            </div>
        </div>
    </>)
}

export default PlayList
