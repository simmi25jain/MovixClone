import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
// import App from './App.jsx'
// import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
    {/* <App /> */}
    {/* <Navbar /> */}
  </StrictMode>,
)
