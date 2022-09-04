import PropTypes from 'prop-types'

const Banner = ({ imageSrc, text }) => {
  return (
    /************* Banner Component ******************/
    <div className="banner">
      {/************* Banner Image ******************/}
      <img className="banner_image" src={imageSrc}></img>
      {/************* Banner Text ******************/}
      <div className="banner_text">{text}</div>
    </div>
  )
}

Banner.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string
}

export default Banner
