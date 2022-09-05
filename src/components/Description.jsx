import React from 'react'
import PropTypes from 'prop-types'
import Collapse from './Collapse'

const Description = ({ id, description, equipments }) => {
  // Create an equipment list
  const equipment = equipments.map((equipement, index) => <li key={`i-${index}`}> {equipement} </li>)

  return (
    <React.Fragment>
      {/************* Description Section ******************/}
      <section className="description">
        <div className="description_left">
          {/************* Left Collapse Description ******************/}
          <Collapse key={`desc-${id}`} title="Description" description={description} />
        </div>
        <div className="description_right">
          {/************* Right Collapse Elements ******************/}
          <Collapse key={`equ-${id}`} title="Equipements" description={equipment} />
        </div>
      </section>
    </React.Fragment>
  )
}

Description.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  equipments: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default Description
