import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThankYou from './pages/ThankYou.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/thank-you' element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
