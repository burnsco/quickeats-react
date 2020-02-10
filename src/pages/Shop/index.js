import React, {useEffect} from 'react'
import {Match} from '@reach/router'
import {connect} from 'react-redux'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/utils'
import {updateCollections} from '../../redux/actions/shop'
import CollectionsOverview from '../../components/CollectionsOverview'
import Category from '../Category'

const Shop = ({updateCollections, match, ...props}) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    return () => {
      collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionsMap)
      })
    }
  }, [updateCollections])

  return (
    <>
      <Match path={`${match.path}/:collectionId`}>
        {props => (props.match ? <CollectionsOverview /> : <Category />)}
      </Match>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)
