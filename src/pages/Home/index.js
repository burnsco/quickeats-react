import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import { selectDirectorySections } from '../../redux/selectors/directory'
import Card from '../../components/Card'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const DirectoryMenuContainer = styled.section`
  width: 1200px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`

const Home = ({ sections }) => {
  return (
    <Wrapper>
      <DirectoryMenuContainer>
        {sections.map(({ id, ...sectionProps }) => (
          <Card key={id} {...sectionProps} />
        ))}
      </DirectoryMenuContainer>
    </Wrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Home)
