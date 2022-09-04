import React from 'react'
import PropTypes from 'prop-types'
import logements from '../data/logements.json'
import redStar from '../assets/redStar.png'
import greyStar from '../assets/greyStar.png'

const Info = ({ id }) => {
  const apartment = logements.filter((appart) => appart.id == id)[0]

  const rating = parseInt(apartment.rating)

  const items = []
  for (let i = 1; i < 6; i++) {
    /************* Ratings note is changed into colored stars ******************/
    i <= rating ? items.push(<img key={`${i}-${i}`} src={redStar} className="stars" alt="star" />) : items.push(<img key={`${i}-${i}`} src={greyStar} className="stars" />)
  }

  return (
    <React.Fragment>
      {/************* Info Section ******************/}
      <section className="info">
        {/************* Left Info Block ******************/}
        <article className="info_leftBlock">
          {/************* Appartment Title ******************/}
          <h1>{apartment.title}</h1>
          {/************* Appartment Location ******************/}
          <p>{apartment.location}</p>
          {/************* Appartment Associed Tags ******************/}
          <div className="info_leftBlock_tags">
            {apartment.tags.map((tag, index) => (
              <span key={`${tag}-${index}`}>{tag}</span>
            ))}
          </div>
        </article>
        {/************* Right Info Block ******************/}
        <article className="info_rightBlock">
          <div className="info_rightBlock_host">
            {/************* Host Name ******************/}
            <p>{apartment.host.name}</p>
            {/************* Host Picture ******************/}
            <img src={apartment.host.picture} alt={apartment.host.name} />
          </div>
          {/************* Host Rating Note ******************/}
          <div className="info_rightBlock_ratings">{items}</div>
        </article>
      </section>
    </React.Fragment>
  )
}

Info.propTypes = {
  id: PropTypes.string
}

export default Info
