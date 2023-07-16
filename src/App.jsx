import './App.css'
import MainScreen from './Components/MainScreen/MainScreen'
import BodyScreen from './Components/BodyScreen/BodyScreen'
import ContactScreen from './Components/ContactScreen/ContactScreen'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

function App() {
    return (
    <div>
      <MainScreen></MainScreen>
        <BodyScreen></BodyScreen>
        <ContactScreen></ContactScreen>
  </div>
    )
}

export default App
