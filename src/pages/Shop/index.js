import React, {Component} from 'react'
import CollectionsOverview from '../../components/CollectionsOverview'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/utils'

class Shop extends Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const collectionRef = firestore.collection('collections')

    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot)
    })
  }

  render() {
    return <CollectionsOverview />
  }
}

export default Shop
