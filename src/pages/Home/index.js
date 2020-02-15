import React from 'react'
import Directory from '../../components/Directory'
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 10vw;

  @media (max-width: 1024px) {
    margin: 0 5vw;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`

const Home = () => (
  <HomeContainer>
    <Directory />
  </HomeContainer>
)

export default Home
