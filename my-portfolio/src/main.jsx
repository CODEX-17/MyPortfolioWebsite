import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ThemeContextProvider } from '../context/ThemeContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage.jsx'
import './App.css'
import PDFViewer from './pages/PDFViewer.jsx'

const rootSelector = document.getElementById('root');
const root = ReactDOM.createRoot(rootSelector)

root.render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
    }}
  >
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/pdf" element={<PDFViewer />} />
        </Routes>
      </ThemeContextProvider>

  </BrowserRouter>
)
