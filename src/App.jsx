import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import { useRef } from 'react'

function App() {

  const aboutRef = useRef(null)
  const homeRef = useRef(null)

  const aboutScroll = () => {
    aboutRef.current.scrollIntoView({behavior: "smooth"})
  }

  const homeScroll = () => {
    homeRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
     <div>
      <Header homeScroll={homeScroll} aboutScroll={aboutScroll} />
      <Home  homeRef={homeRef}/>
      <About aboutRef={aboutRef} />
     </div>
  )

}

export default App
