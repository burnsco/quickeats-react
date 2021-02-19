import Container from "@components/layout/container"
import firebaseAdmin from "@config/firebaseAdmin"
import "firebase/firestore"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
  try {
    const db = firebaseAdmin.firestore()

    const collections = db.collection("collections")
    const burgerDoc = await collections.doc("Burgers").get()
    const chickenDoc = await collections.doc("Chicken").get()
    const pizzaDoc = await collections.doc("Pizza").get()
    const sandwichDoc = await collections.doc("Sandwiches").get()
    const sushiDoc = await collections.doc("Sushi").get()

    return {
      props: {
        burgerData: burgerDoc.data(),
        chickenData: chickenDoc.data(),
        pizzaData: pizzaDoc.data(),
        sandwichData: sandwichDoc.data(),
        sushiData: sushiDoc.data()
      }
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      },
      // `as never` is required for correct type inference
      // by InferGetServerSidePropsType below
      props: {} as never
    }
  }
}

const AuthenticatedPage = (props: any) => (
  <Container>
    <h2>items : </h2>
    <ul>
      {props?.burgerData.items.map((item: any) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
    <ul>
      {props?.chickenData.items.map((item: any) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
    <ul>
      {props?.pizzaData.items.map((item: any) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
    <ul>
      {props?.sandwichData.items.map((item: any) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
    <ul>
      {props?.sushiData.items.map((item: any) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  </Container>
)

export default AuthenticatedPage
