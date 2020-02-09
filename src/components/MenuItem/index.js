import React from 'react'
import {Link} from '@reach/router'

import './styles.scss'

export const MenuItem = ({title, imageUrl, linkUrl, size}) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="content">
      <Link to={linkUrl}>
        <div className="title">{title}</div>
        <div className="subtitle">Click to Browse</div>
      </Link>
    </div>
  </div>
)
