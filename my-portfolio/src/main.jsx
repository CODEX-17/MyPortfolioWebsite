import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ThemeContextProvider } from '../context/ThemeContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage.jsx'



const rootSelector = document.getElementById('root');
const root = ReactDOM.createRoot(rootSelector)

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </ThemeContextProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
