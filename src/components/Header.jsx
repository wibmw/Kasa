import { NavLink } from 'react-router-dom'
import logoKasa from '../assets/logoKasa.jpg'

const Header = () => {
  return (
    <header className="header">
      {/************* Home Picture Link ******************/}
      <NavLink to="/">
        <img src={logoKasa} className="header_logo" alt="Kasa" />
      </NavLink>
      {/************* Nav links for all pages ******************/}
      <nav>
        <NavLink to="/" className="header_link">
          Accueil
        </NavLink>
        <NavLink to="/apropos" className="header_link">
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
