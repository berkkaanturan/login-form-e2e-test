import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const GITHUB_REPO_URL = "https://github.com/berkkaanturan/login-form-e2e-test";
console.log("Proje GitHub Adresi:", GITHUB_REPO_URL);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)