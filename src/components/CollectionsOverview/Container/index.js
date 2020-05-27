import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching} from '../../../redux/selectors/shop'
import CollectionsOverview from '..'
import WithSpinner from '../../Spinner'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview)

export default CollectionsOverviewContainer
