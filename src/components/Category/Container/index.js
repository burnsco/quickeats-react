import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionsLoaded} from '../../../redux/selectors/shop'
import WithSpinner from '../../Spinner'
import Category from '..'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
})

const CategoryPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(Category)

export default CategoryPageContainer
