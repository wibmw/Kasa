import { Link } from 'react-router-dom'
import logoKasa from '../images/logoKasa.jpg'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logoKasa} className="logo" alt="Kasa" />
      </Link>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
