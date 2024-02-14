import React, { createContext, useState } from 'react'
import Header from './components/Header'
import VideoPage from "./components/video/videoPage"
import PlayList from './components/playList/playList'
import listData from "./components/playList/playList.json"

export const VideoContext = createContext(null)

function App() {

  //const [url, setUrl] = useState({url:playListJson['videos'][0].sources[0],index:0})
  const [list, setList] = useState({listData:listData['videos'],index:0})
  //console.log(url)

  return (
    <>
      <VideoContext.Provider value={{ list, setList }}>
        <div className='w-full h-screen bg-slate-500'>
          <div className="w-full h-[8%]">
            <Header />
          </div>
          <div className='flex flex-col sm:flex-row justify-center h-[92%]'>
            <div className='w-full sm:w-4/6 my-2 sm:m-0'>
              <VideoPage />
            </div>
            <div className='w-full sm:w-2/6 overflow-scroll p-2 sm:p-0'>
              <PlayList />
            </div>

          </div >
        </div>
      </VideoContext.Provider>
    </>
  )
}

export default App
