import * as firebaseAdmin from "firebase-admin"
import firebaseJSON from "../../quikeats-d24d2-5af7b1f0820a.json"

const privateKey = firebaseJSON.private_key
const clientEmail = firebaseJSON.client_email
const projectId = firebaseJSON.project_id

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
