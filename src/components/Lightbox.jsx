import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Lightbox({ id }) {
  return (
    <Link to={`/ficheLogement/${id}`}>
      <div className="card-container" id={id}></div>
    </Link>
  )
}

Lightbox.propTypes = {
  id: PropTypes.string
}

export default Lightbox
