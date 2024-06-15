import React, { createContext, useRef, useState } from 'react'
import VideoPage from "./components/video/videoPage"
import PlayList from "./components/playList/playList"
import listData from "./components/playList/playList.json"

//main context
export const VideoContext = createContext(null)

function App() {

  //list - used as value in Context.Provider
  /*list value 
      1 - videos value
      2 - index value, stores index value of the video to play
  */
  const [list, setList] = useState({ listData: listData['videos'], index: 0 })

  return (
    <>
      <VideoContext.Provider value={{ list, setList }}>
        <div className='max-w-screen h-screen bg-gradient-to-r from-gray-600 to-gray-900'>
          <div className='flex flex-col min-[500px]:flex-row justify-center h-screen'>

            {/* Video Component */}
            <div className='w-full min-[500px]:w-4/6 my-2 sm:m-0'>
              <VideoPage />
            </div>

            {/* Playlist component */}
            <div className='w-full min-[500px]:h-full min-[500px]:w-2/6 overflow-y-scroll p-4 rounded'>
              <PlayList />
            </div>

          </div >
        </div>
      </VideoContext.Provider>
    </>
  )
}

export default App
