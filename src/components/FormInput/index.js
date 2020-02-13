import React from 'react'

import {GroupContainer, FormInputContainer, FormInputLabel} from './styles.js'

const FormInput = ({handleChange, label, ...props}) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
)

export default FormInput
