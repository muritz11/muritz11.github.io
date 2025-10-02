import React, { useEffect } from 'react'
import './assets/styles/App.css'
import './assets/styles/bootstrap-main/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Home from './Home'

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      easing: 'ease-out-cubic',
    })
  }, [])

  return <Home />
}

export default App
