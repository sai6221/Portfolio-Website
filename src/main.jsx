import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactDOM.render(
    <React.StrictMode>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
              <App />
          </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
)
