import React from "react"
import Info from "./Info"
import AboutMe from "./AboutMe"
import Interests from "./Interests"
import Footer from "./Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="card-box">
          <Info/>
          <AboutMe/>
          <Interests/>
          <Footer/>
      </div>
    </div>
  )
}

export default App
