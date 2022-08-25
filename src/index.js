import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/apropos" element={<Apropos />} />
    </Routes>
  </Router>
)
