import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import FicheLogement from './pages/FicheLogement'
import Erreur from './pages/Erreur'
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
/*let baseURL = ''
if (process.env.NODE_ENV == 'production') {
  baseURL = 'Kasa/'
} else {
  baseURL = '/'
}*/

root.render(
  <Router>
    <Header />
    <Routes>
      <Route exact path={'/'} element={<Home />} />
      <Route path={'/apropos'} element={<Apropos />} />
      <Route path={'/ficheLogement/:id'} element={<FicheLogement />} />
      <Route path={'*'} element={<Erreur />} />
    </Routes>
    <Footer />
  </Router>
)
