import PropTypes from 'prop-types'
import { useState } from 'react'

const Collapse = ({ title, description }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  /************* Collapse Animation ******************/
  const descriptionCollapse = (e) => {
    e.preventDefault()
    setIsCollapsed(!isCollapsed)
  }

  return (
    /************* Collapse component ******************/
    <article className="collapse">
      {/************* Collapse Title ******************/}
      <div className="collapse_title" onClick={descriptionCollapse}>
        {title}{' '}
        {/************* Animated Arrow ******************/}
        <svg className={isCollapsed ? 'rotate-arrow' : 'unrotate-arrow'} width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" fill="white" />
        </svg>
      </div>
      {/************* Collapse Content ******************/}
      {isCollapsed && <p className="collapse_content">{description}</p>}
    </article>
  )
}

Collapse.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default Collapse
