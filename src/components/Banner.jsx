function Banner(_props) {
  return (
    <div className="banner-container">
      <img className="banner-image" src={_props.imageSrc}></img>
      <div className="banner-text">{_props.text}</div>
    </div>
  )
}

export default Banner
