import Container from "@components/layout/container"
import firebaseAdmin from "@config/firebaseAdmin"
import firebaseClient from "@config/firebaseClient"
import "firebase/firestore"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import nookies from "nookies"

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const db = firebaseAdmin.firestore()

    const cookies = nookies.get(ctx)
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const { uid, email } = token

    const collections = db.collection("collections")
    const burgerDoc = await collections.doc("Burgers").get()

    return {
      props: {
        data: burgerDoc.data(),
        message: `Your email is ${email} and your UID is ${uid}.`
      }
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      },
      props: {} as never
    }
  }
}

const AuthenticatedPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => (
  <Container>
    <p>{props.message!}</p>
    <h1>{props?.data?.title}</h1>
    <h2>items : </h2>
    <ul>
      {props?.data?.items.map((item: any) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
    <button
      type="submit"
      onClick={async () => {
        await firebaseClient.auth().signOut()
        window.location.href = "/"
      }}
    >
      Sign out
    </button>
  </Container>
)

export default AuthenticatedPage
