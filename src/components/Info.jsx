import React from 'react'
import PropTypes from 'prop-types'
//import { useEffect, useState } from 'react'
import logements from '../data/logements.json'
import redStar from '../images/redStar.png'
import greyStar from '../images/greyStar.png'
function Info({ id }) {
  const apartment = logements.filter((appart) => appart.id == id)[0]
  const rating = parseInt(apartment.rating)

  const items = []
  for (let i = 1; i < 6; i++) {
    i <= rating ? items.push(<img key={`${i}-${i}`} src={redStar} className="stars" />) : items.push(<img key={`${i}-${i}`} src={greyStar} className="stars" />)
  }

  return (
    <React.Fragment>
      <section id="apartmentInfo">
        <article className="left-block">
          <h1>{apartment.title}</h1>
          <p>{apartment.location}</p>
          <div className="tags">
            {apartment.tags.map((tag, index) => (
              <span key={`${tag}-${index}`}>{tag}</span>
            ))}
          </div>
        </article>
        <article className="right-block">
          <div className="host">
            <p>{apartment.host.name}</p>
            <img src={apartment.host.picture} alt={apartment.host.name} />
          </div>
          <div className="rating">{items}</div>
        </article>
      </section>
    </React.Fragment>
  )
}

Info.propTypes = {
  id: PropTypes.string
}

export default Info
