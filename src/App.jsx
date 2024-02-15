import React, { createContext, useState } from 'react'
import VideoPage from "./components/video/videoPage"
import PlayList from './components/playList/playList'
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
  const obj = {}

  return (
    <>
      <VideoContext.Provider value={{ list, setList }}>
        <div className='w-full h-screen bg-gradient-to-r from-slate-500 to-slate-800'>
          <div className='flex flex-col sm:flex-row justify-center h-screen'>

            {/* Video Component */}
            <div className='w-full sm:w-4/6 my-2 sm:m-0 '>
              <VideoPage />
            </div>

            {/* Playlist component */}
            <div className='w-full sm:w-2/6 overflow-y-scroll p-4 bg-slate-700 rounded'>
              <PlayList />
            </div>

          </div >
        </div>
      </VideoContext.Provider>
    </>
  )
}

export default App
