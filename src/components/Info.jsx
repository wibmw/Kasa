import React from 'react'
import PropTypes from 'prop-types'
import redStar from '../assets/redStar.png'
import greyStar from '../assets/greyStar.png'

const Info = ({ rating, location, title, host, tags }) => {
  const items = []
  for (let i = 1; i < 6; i++) {
    /************* Ratings note is changed into colored stars ******************/
    i <= parseInt(rating) ? items.push(<img key={`${i}-${i}`} src={redStar} className="stars" alt="star" />) : items.push(<img key={`${i}-${i}`} src={greyStar} className="stars" />)
  }

  return (
    <React.Fragment>
      {/************* Info Section ******************/}
      <section className="info">
        {/************* Left Info Block ******************/}
        <article className="info_leftBlock">
          {/************* Appartment Title ******************/}
          <h1>{title}</h1>
          {/************* Appartment Location ******************/}
          <p>{location}</p>
          {/************* Appartment Associed Tags ******************/}
          <div className="info_leftBlock_tags">
            {tags.map((tag, index) => (
              <span key={`${tag}-${index}`}>{tag}</span>
            ))}
          </div>
        </article>
        {/************* Right Info Block ******************/}
        <article className="info_rightBlock">
          <div className="info_rightBlock_host">
            {/************* Host Name ******************/}
            <p>{host.name}</p>
            {/************* Host Picture ******************/}
            <img src={host.picture} alt={host.name} />
          </div>
          {/************* Host Rating Note ******************/}
          <div className="info_rightBlock_ratings">{items}</div>
        </article>
      </section>
    </React.Fragment>
  )
}

Info.propTypes = {
  rating: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  host: PropTypes.object,
  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default Info
