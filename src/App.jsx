import './App.css'
import MainScreen from './Components/MainScreen/MainScreen'
import BodyScreen from './Components/BodyScreen/BodyScreen'
import ContactScreen from './Components/ContactScreen/ContactScreen'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/react-vite-gh-pages/' })
    return (
<BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}
    >
      <Routes>
        <Route
          path='/'
          element={
            <div>
<MainScreen></MainScreen>
  <BodyScreen></BodyScreen>
  <ContactScreen></ContactScreen>
</div>
          }
        />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
    )
}

export default App
