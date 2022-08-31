import { NavLink } from 'react-router-dom'
import logoKasa from '../images/logoKasa.jpg'

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logoKasa} className="logo" alt="Kasa" />
      </NavLink>

      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/apropos">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
