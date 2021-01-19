import firebaseClient from "firebase/app"
import "firebase/auth"

const CLIENT_CONFIG = {
  apiKey: "AIzaSyANILBdWUc8OpeTPnATlpuFndCY8zi-U9E",
  authDomain: "quikeats-d24d2.firebaseapp.com",
  databaseURL: "https://quikeats-d24d2.firebaseio.com",
  projectId: "quikeats-d24d2",
  storageBucket: "quikeats-d24d2.appspot.com",
  messagingSenderId: "708033252363",
  appId: "1:708033252363:web:385f17204525cd8959cb0e"
}

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG)
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION)
  ;(window as any).firebase = firebaseClient
}

export { firebaseClient as default }
