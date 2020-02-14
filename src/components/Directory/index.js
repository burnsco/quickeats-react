import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import styled from 'styled-components'
import {selectDirectorySections} from '../../redux/selectors/directory'
import Card from '../Card'

const DirectoryMenuContainer = styled.section`
  margin-top: 2em;
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Directory = ({sections}) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({id, ...sectionProps}) => (
        <Card key={id} {...sectionProps} />
      ))}
    </DirectoryMenuContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
