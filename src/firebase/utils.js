import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyANILBdWUc8OpeTPnATlpuFndCY8zi-U9E",
  authDomain: "quikeats-d24d2.firebaseapp.com",
  databaseURL: "https://quikeats-d24d2.firebaseio.com",
  projectId: "quikeats-d24d2",
  storageBucket: "quikeats-d24d2.appspot.com",
  messagingSenderId: "708033252363",
  appId: "1:708033252363:web:385f17204525cd8959cb0e",
  measurementId: "G-TGZMLSDKHP",
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, data) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      })
    } catch (err) {
      console.log(`error creating user ${err.message}`)
    }
  }
  return userRef
}

export const unsubscribeFromAuth = ({ setCurrentUser }) => {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot((snapShot) => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data(),
        })
      })
    }

    setCurrentUser(userAuth)
  })
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(obj.title)
    console.log(newDocRef)
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
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
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
