import React from 'react'
import Home from './Pages/Home'
import Feature from './Pages/Feature'
import Project from './Pages/Project'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Header from './Components/Header'

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <Home />
        <Feature />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>

  )
}

export default App
