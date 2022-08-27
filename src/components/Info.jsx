import React from 'react'
import PropTypes from 'prop-types'
//import { useEffect, useState } from 'react'
import logements from '../data/logements.json'
function Info({ id }) {
  const apartment = logements.filter((appart) => appart.id == id)[0]

  console.log(apartment)
  return (
    <React.Fragment>
      <section id="apartmentInfo">
        <article className="left-block">
          <h1>{id}</h1>
          <p>{apartment.location}</p>
          <div className="tags"></div>
        </article>
        <article className="right-block">
          <div className="host">
            <p>{apartment.host.name}</p>
            <img src={apartment.host.picture} alt={apartment.host.name} />
          </div>
          <div>{apartment.rating}</div>
        </article>
      </section>
    </React.Fragment>
  )
}

Info.propTypes = {
  id: PropTypes.string
}

export default Info
