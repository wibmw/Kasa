import React from 'react'
import PropTypes from 'prop-types'
import Collapse from './Collapse'
import logements from '../data/logements.json'

function Description({ id }) {
  const apartment = logements.filter((appart) => appart.id == id)[0]
  const equipments = apartment.equipments.map((equipement, index) => <li key={`i-${index}`}> {equipement} </li>)

  return (
    <React.Fragment>
      <section id="descriptions">
        <div className="left-description">
          <Collapse key={`desc-${id}`} title="Description" description={apartment.description} />
        </div>
        <div className="right-description">
          <Collapse key={`equ-${id}`} title="Equipements" description={equipments} />
        </div>
      </section>
    </React.Fragment>
  )
}

Description.propTypes = {
  id: PropTypes.string
}

export default Description
