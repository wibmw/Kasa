import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ id, image, title }) => {
  return (
    /************* Card link ******************/
    <Link to={`/ficheLogement/${id}`}>
      <div className="card" id={id}>
        {/************* Card Image******************/}
        <img className="card_image" src={image}></img>
        {/************* Card Title ******************/}
        <p className="card_title">{title}</p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string
}

export default Card
