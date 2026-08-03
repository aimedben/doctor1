import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BookingPage from './pages/BookingPage.tsx'
import AdminPage from './pages/AdminPage.tsx'
import PrivacyPage from './pages/PrivacyPage.tsx'
import N8nChat from './components/N8nChat.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rendez-vous" element={<BookingPage />} />
        <Route path="/admifri" element={<AdminPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <N8nChat />
    </BrowserRouter>
  </StrictMode>,
)
