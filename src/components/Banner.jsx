import PropTypes from 'prop-types'
function Banner({ imageSrc, text }) {
  return (
    <div className="banner-container">
      <img className="banner-image" src={imageSrc}></img>
      <div className="banner-text">{text}</div>
    </div>
  )
}

Banner.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string
}

export default Banner
