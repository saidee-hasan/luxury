import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
          {/* Providing the router for the app */}
          <RouterProvider router={router} />
        
  </StrictMode>,
)
