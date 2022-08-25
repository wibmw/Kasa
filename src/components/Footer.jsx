import logoKasa from '../images/logoKasaWhite.png'

function Footer() {
    return (
      <footer>
        <img className="footer-logo" src={logoKasa} alt="Logo Kasa"></img>
        <div className="footer-text">© 2020 Kasa. All rights reserved</div>
      </footer>
    )
  }
  
  export default Footer