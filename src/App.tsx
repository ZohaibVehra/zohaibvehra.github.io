import Banner from './components/Banner'
import './App.css'
import TopBar from './components/TopBar'
import Projects from './components/Projects'
import MobileTopBar from './components/MobileTopBar'
import Experience from './components/Experience'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'


function App() {

  return (
    <>
      <>
        <div className="block md:hidden">
          <MobileTopBar />
        </div>

        <div className="hidden md:block">
          <TopBar />
        </div>
      </>
      <Banner />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </>
  )
}

export default App
