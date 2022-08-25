import React from 'react'
import PropTypes from 'prop-types'

function Card({id, image, title }) {
  return (
    <div className="card-container" id={id}>
      <img className="card-image" src={image}></img>
      <p className="card-title">{title}</p>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
}

export default Card
