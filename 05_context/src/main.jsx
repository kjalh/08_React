import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeProvider } from './DarkModeContext.jsx' // 공용으로 사용하려고 불러옴

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>   
      <App />
    </DarkModeProvider>
  </StrictMode>,
)
