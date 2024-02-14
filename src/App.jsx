import React, { createContext, useContext, useState } from 'react'
import Header from './components/Header'
import VideoPage from "./components/video/videoPage"
import PlayList from './components/playList/playList'
import playList from "./components/playList/playList.json"

function App() {

  const [url,setUrl] = useState(playList['videos'][0].sources[0])
  //console.log(url)
  const videoContext = useContext({url,setUrl})

  return (
    <>
      <div className='w-full h-screen bg-slate-500'>
        <div className="w-full h-[8%]">
          <Header />
        </div>
        <div className='flex justify-center h-[92%]'>
          <VideoPage />
          <PlayList />
        </div >
      </div>
    </>
  )
}

export default App
