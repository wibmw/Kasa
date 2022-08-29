import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Collapse({ title, description }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  // Open/close dropdown
  const descriptionCollapse = (e) => {
    e.preventDefault()
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="collapse-container">
      <div className="collapse-title" onClick={descriptionCollapse}>
        {title}{' '}
        <svg className={isCollapsed ? 'rotate-arrow' : 'not-rotate-arrow'} width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" fill="white" />
        </svg>
      </div>
      {isCollapsed && <p className="collapse-content">{description}</p>}
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default Collapse
