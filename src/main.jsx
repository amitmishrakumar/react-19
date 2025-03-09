import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Reuse_loop from './Reuse_loop.jsx'
import Amit_App from './Amit_App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <App /> */}
      {/* <Reuse_loop/> */}
      <Amit_App />
    </StrictMode>,
  </BrowserRouter>
)