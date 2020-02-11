import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC0hg2LDxJ82yZ6YoFm9ro4AD5M-YiAt0A',
  authDomain: 'crwn-db-52861.firebaseapp.com',
  databaseURL: 'https://crwn-db-52861.firebaseio.com',
  projectId: 'crwn-db-52861',
  storageBucket: 'crwn-db-52861.appspot.com',
  messagingSenderId: '767664389138',
  appId: '1:767664389138:web:8f6cb472685c0f0e59accb',
  measurementId: 'G-C3BBRHYK9T'
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      })
    } catch (err) {
      console.log(`error creating user ${err.message}`)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(obj.title)
    console.log(newDocRef)
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
