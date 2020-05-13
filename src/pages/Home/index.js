import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import styled from '@xstyled/styled-components'
import {selectDirectorySections} from '../../redux/selectors/directory'
import Card from '../../components/Card'
import {GridMixin} from '../../theme/breakpoints'

const DirectioMenuWrapper = styled.section`
  display: flex;
  align-self: auto;
  margin-right: 1em;
  padding: 1em;
  margin-left: 1em;
  flex-direction: column;
`
const DirectoryMenuContainer = styled.div`
  ${GridMixin}
`

const Home = ({sections}) => {
  return (
    <DirectioMenuWrapper>
      <DirectoryMenuContainer>
        {sections.map(({id, ...sectionProps}) => (
          <Card key={id} {...sectionProps} />
        ))}
      </DirectoryMenuContainer>
    </DirectioMenuWrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Home)
