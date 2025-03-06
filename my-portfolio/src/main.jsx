import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ThemeContextProvider } from '../context/ThemeContext.jsx'


const rootSelector = document.getElementById('root');
const root = ReactDOM.createRoot(rootSelector)

root.render(
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </React.StrictMode>,
)
