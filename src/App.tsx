import { useState } from 'react'
import Banner from './components/Banner'
import './App.css'
import TopBar from './components/TopBar'
import Projects from './components/Projects'
import MobileTopBar from './components/MobileTopBar'

function App() {

  return (
    <>
      <>
        {/* MOBILE TOPBAR */}
        <div className="block md:hidden">
          <MobileTopBar />
        </div>

        {/* DESKTOP TOPBAR */}
        <div className="hidden md:block">
          <TopBar />
        </div>
      </>
      <Banner />
      <Projects />
    </>
  )
}

export default App
