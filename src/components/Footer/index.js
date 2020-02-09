import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  height: 60px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: black;
`

const Footer = () => (
  <Container>
    <p>&stuff</p>
  </Container>
)

export default Footer
