import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
)
