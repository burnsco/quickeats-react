import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollectionsStartAsync } from '../../redux/actions/shop'
import CollectionsOverviewContainer from '../../components/CollectionsOverview/Container'
import CategoryPageContainer from '../../components/Category/Container'

const Shop = ({ fetchCollectionsStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync])

  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:category`}
        component={CategoryPageContainer}
      />
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(Shop)
