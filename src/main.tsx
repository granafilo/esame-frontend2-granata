import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Shell from './components/Shell.tsx'
import HomePage from './pages/HomePage.tsx'
import MovieDetailsPage from './pages/MovieDetailsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shell />}>
          <Route index element={<HomePage />} />
          <Route path='movies/:id' element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
