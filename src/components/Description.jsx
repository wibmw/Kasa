import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Description({ id }) {
  return (
    <Link to={`/ficheLogement/${id}`}>
      <div className="card-container" id={id}></div>
    </Link>
  )
}

Description.propTypes = {
  id: PropTypes.string
}

export default Description
