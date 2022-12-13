import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { All_users_context } from './context/usersContext'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <All_users_context>
      <App />
    </All_users_context>
  </React.StrictMode>,
)
