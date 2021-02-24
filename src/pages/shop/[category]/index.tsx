import ProductsList from "@components/common/ProductsList"
import firebaseAdmin from "@config/firebaseAdmin"
import { sections } from "@config/site-sections"
import { capitalizeFirst } from "@utils/capitalizeFirst"
import "firebase/firestore"
import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const collectionTitle = capitalizeFirst(params.category)

  const db = firebaseAdmin.firestore()
  const collections = db.collection("collections")
  const collectionDoc = await collections.doc(collectionTitle).get()

  if (!collectionDoc.exists) {
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      },
      props: {} as never
    }
  }
  return {
    props: {
      data: collectionDoc.data()
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sections.map(section => `/shop/${section.name}`)

  return {
    paths,
    fallback: "blocking"
  }
}

const ShopByCategoryPage = (props: ProductDataType) => (
  <ProductsList {...props} />
)

export default ShopByCategoryPage
