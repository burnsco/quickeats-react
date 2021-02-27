import * as firebaseAdmin from "firebase-admin"

const privateKey = process.env.FIREBASE_PRIVATE_KEY
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey,
      clientEmail,
      projectId
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
  })
}

export { firebaseAdmin as default }
