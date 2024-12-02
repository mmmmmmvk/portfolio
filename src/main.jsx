import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <App />
  </StrictMode>,
  <div className="header">
  <span>Seite 1</span>
  <span>Seite 2</span>
  <span>Seite 3</span>
  <span>Seite 4</span>
  </div>
  </>
)
