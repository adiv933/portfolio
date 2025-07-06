import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PreloaderProvider } from './contexts/PreloaderContext.jsx'
import Preloader from './components/Preloader.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreloaderProvider>
      <BrowserRouter>
        <Preloader />
        <App />
      </BrowserRouter>
    </PreloaderProvider>
  </StrictMode>,
)
