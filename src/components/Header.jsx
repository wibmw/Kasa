import { NavLink } from 'react-router-dom'
import logoKasa from '../assets/logoKasa.jpg'

const Header = () => {
  let baseURL = ''
  if (process.env.NODE_ENV == 'production') {
    baseURL = 'Kasa/'
  } else {
    baseURL = '/'
  }

  return (
    <header className="header">
      {/************* Home Picture Link ******************/}
      <NavLink to={baseURL + ''}>
        <img src={logoKasa} className="header_logo" alt="Kasa" />
      </NavLink>
      {/************* Nav links for all pages ******************/}
      <nav>
        <NavLink to={baseURL + ''} className="header_link">
          Accueil
        </NavLink>
        <NavLink to={baseURL + 'apropos'} className="header_link">
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
