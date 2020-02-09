import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/selectors/directory'

import './styles.scss'
import Card from '../Card'

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({id, ...sectionProps}) => (
        // <MenuItem key={id} {...sectionProps} />
        <Card key={id} {...sectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
