import React, { createContext, useState } from 'react'
import Header from './components/Header'
import VideoPage from "./components/video/videoPage"
import PlayList from './components/playList/playList'
import playList from "./components/playList/playList.json"

export const VideoContext = createContext(null)

function App() {

  const [url, setUrl] = useState({url:playList['videos'][0].sources[0],index:0})
  //console.log(url)

  return (
    <>
      <VideoContext.Provider value={{ url, setUrl }}>
        <div className='w-full h-screen bg-slate-500'>
          <div className="w-full h-[8%]">
            <Header />
          </div>
          <div className='flex justify-center h-[92%]'>
            <div className='w-4/6'>
              <VideoPage />
            </div>
            <div className='w-2/6 overflow-scroll'>
              <PlayList />
            </div>

          </div >
        </div>
      </VideoContext.Provider>
    </>
  )
}

export default App
