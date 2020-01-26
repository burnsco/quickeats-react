import React from 'react'

import './styles.scss'

export const MenuItem = ({ title, imageUrl }) => (
  <div className={`menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="content">
      <div className="title">{title}</div>
      <div className="subtitle">Click to Browse</div>
    </div>
  </div>
)
