import React from 'react'
import styled from 'styled-components'
import Directory from '../../components/Directory'

const Container = styled.section`
  margin-right: 25px;
  margin-left: 25px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`

const Home = () => (
  <Container>
    <Directory />
  </Container>
)

export default Home
