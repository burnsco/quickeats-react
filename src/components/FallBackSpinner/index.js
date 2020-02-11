import React from 'react'

import {SpinnerContainer, SpinnerOverlay} from './styles.js'

const FallBackSpinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
)

export default FallBackSpinner
