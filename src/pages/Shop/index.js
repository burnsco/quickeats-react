import React from 'react'
import {connect} from 'react-redux'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/utils'
import {updateCollections} from '../../redux/actions/shop'
import CollectionsOverview from '../../components/CollectionsOverview'
import {Router} from '@reach/router'
import Category from '../../components/Category'
import WithSpinner from '../../components/Spinner'

export const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
export const CategoryPageWithSpinner = WithSpinner(Category)

class Shop extends React.Component {
  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const {updateCollections} = this.props
    const collectionRef = firestore.collection('collections')

    this.unsubscribeFromSnapshot = collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({loading: false})
    })
  }

  render() {
    console.log('props')
    console.log(this.props)
    return (
      <Router>
        <CollectionsOverviewWithSpinner
          path="/"
          isLoading={this.state.loading}
          {...this.props}
        />
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)
