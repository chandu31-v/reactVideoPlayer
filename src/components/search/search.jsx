import React, { useContext, useEffect, useState } from "react";
import { VideoContext } from "../../App";


function Search({ setSearchList }) {

    const [search, setSearch] = useState("")
    const { list } = useContext(VideoContext)

    useEffect(() => {

        let obj = []
        if (search === "") {
            setSearchList([])
        }else if (search.length > 0) {
            list.listData.map((value, index) => {
                const ans = Object.values(value.title).join("").toLowerCase().includes(search.toLowerCase())
                if (ans) {
                    obj.push({ ...value, index: index })
                }

            })
            if(obj.length===0){
                obj.push({title:"No search found"})
            }
            setSearchList(obj)
        }
    }, [search])


    return (<>
        {/* search input section */}
        <div className="w-full h-full">
            <input type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                className="border-[1px] border-slate-600 font-semibold text-white w-full h-full rounded-3xl bg-slate-700 pl-4" />
        </div>
    </>)
}


export default Search
