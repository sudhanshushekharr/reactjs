import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Context/UserContext.jsx'




createRoot(document.getElementById('root')).render(
 
     <UserContext>
       <App />   
     </UserContext>
              //app usercontext ka children ban gy ahai
   
 
)

//JSX- JAVASCRIPT XML COMBINATION OF JAVASCRIPT AND HTML
