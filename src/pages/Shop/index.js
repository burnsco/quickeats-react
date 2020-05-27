import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import CategoryPageContainer from '../../components/Category/Container'
import CollectionsOverviewContainer from '../../components/CollectionsOverview/Container'
import {fetchCollectionsStartAsync} from '../../redux/actions/shop'

const Shop = ({fetchCollectionsStartAsync, match}) => {
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

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(null, mapDispatchToProps)(Shop)
