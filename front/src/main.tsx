import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes.tsx'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
