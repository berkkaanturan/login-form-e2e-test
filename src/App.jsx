import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Login bileşenini import et
import Success from './components/Success'; // Success bileşenini import et
import './App.css'; // Varsayılan stil dosyanız (içini boş bırakabiliriz)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;