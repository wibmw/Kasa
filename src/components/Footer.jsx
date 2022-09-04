import logoKasa from '../assets/logoKasaWhite.png'

const Footer = () => {
  return (
    <footer className="footer">
      {/************* Footer Logo ******************/}
      <img className="footer_logo" src={logoKasa} alt="Logo Kasa"></img>
      {/************* Footer text ******************/}
      <div className="footer_text">© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer
