import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Header from './components/Header'
import Footer from './components/Footer'
import FicheLogement from './pages/FicheLogement'
import Erreur from './pages/Erreur'
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/ficheLogement/:id" element={<FicheLogement />} />
      <Route path="/erreur" element={<Erreur />} />
    </Routes>
    <Footer />
  </Router>
)
