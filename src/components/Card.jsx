import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ id, image, title }) {
  return (
    <Link to={`/ficheLogement/${id}`}>
      <div className="card-container" id={id}>
        <img className="card-image" src={image}></img>
        <p className="card-title">{title}</p>
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
