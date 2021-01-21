import * as firebaseAdmin from "firebase-admin"

const privateKey = process.env.FIREBASE_PRIVATE_KEY
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
const projectId = process.env.FIREBASE_PROJECT_ID

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey,
      clientEmail,
      projectId
    }),
    databaseURL: `https://${projectId}.firebaseio.com`
  })
}

export { firebaseAdmin as default }
