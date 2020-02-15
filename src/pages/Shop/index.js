import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import CategoryPageContainer from '../../components/Category/Container'
import CollectionsOverviewContainer from '../../components/CollectionsOverview/Container'
import { fetchCollectionsStartAsync } from '../../redux/actions/shop'

const Shop = ({ fetchCollectionsStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync])

  return (
    <Switch>
      <Route path={`${match.path}/:category`}>
        <CategoryPageContainer />
      </Route>
      <Route path={`${match.path}`}>
        <CollectionsOverviewContainer />
      </Route>
    </Switch>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(Shop)
