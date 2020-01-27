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

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
