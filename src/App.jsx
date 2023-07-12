import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainScreen from './Components/MainScreen/MainScreen'
import BodyScreen from './Components/BodyScreen/BodyScreen'

function App() {
    return (
    <div>
      <MainScreen></MainScreen>
        <BodyScreen></BodyScreen>
        {/* <ContactScreen></ContactScreen> */}
  </div>
    )
}

export default App
