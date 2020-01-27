import React from 'react'

import './styles.scss'

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="group">
    {label && (
      <label
        className={`${props.value.length ? 'shrink' : ''} form-input-label`}
        htmlFor={label}
      >
        {label}
      </label>
    )}

    <input className="form-input" onChange={handleChange} {...props} />
  </div>
)

export default FormInput
