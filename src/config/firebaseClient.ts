import firebaseClient from "firebase/app"
import "firebase/auth" // If you need it
import "firebase/firestore" // If you need it

const CLIENT_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

const TESTING_CLIENT_CONFIG = {
  apiKey: "AIzaSyANILBdWUc8OpeTPnATlpuFndCY8zi-U9E",
  authDomain: "quikeats-d24d2.firebaseapp.com",
  databaseURL: "https://quikeats-d24d2.firebaseio.com",
  projectId: "quikeats-d24d2",
  storageBucket: "quikeats-d24d2.appspot.com",
  messagingSenderId: "708033252363",
  appId: "1:708033252363:web:385f17204525cd8959cb0e"
}

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  if (window.location.hostname === "localhost") {
    firebaseClient.initializeApp(TESTING_CLIENT_CONFIG)
    firebaseClient.auth()
    ;(window as any).firebase = firebaseClient
    firebaseClient.auth().useEmulator("http://localhost:9099")
  } else {
    firebaseClient.initializeApp(CLIENT_CONFIG)
    firebaseClient
      .auth()
      .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION)
    ;(window as any).firebase = firebaseClient
  }
}

export { firebaseClient as default }
