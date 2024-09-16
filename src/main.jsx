import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ResultContextProvider } from './Contexts/ResultContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResultContextProvider>
    <Router>
    <App />
    </Router>
    </ResultContextProvider>
    
  </StrictMode>,
)
