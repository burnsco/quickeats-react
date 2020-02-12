import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionsOverview from '../../components/CollectionsOverview'
import { Route } from 'react-router-dom'
import Category from '../../components/Category'
import WithSpinner from '../../components/Spinner'
import { selectIsCollectionFetching } from '../../redux/selectors/shop'
import { fetchCollectionsStartAsync } from '../../redux/actions/shop'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CategoryPageWithSpinner = WithSpinner(Category)

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match } = this.props
    const { isCollectionFetching } = this.props
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:category`}
          render={props => (
            <CategoryPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
