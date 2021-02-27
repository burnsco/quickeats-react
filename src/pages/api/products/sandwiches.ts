import firebaseAdmin from "@config/firebaseAdmin"
import { NextApiRequest, NextApiResponse } from "next"

const getSandwiches = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = firebaseAdmin.firestore()

    const collections = db.collection("collections")
    const sandwichDoc = await collections.doc("Sandwiches").get()

    const products = {
      sandwiches: [sandwichDoc.data()]
    }

    res.status(200).json(products)
  } catch (err) {
    res.status(404).json({ message: "Products not found!" })
  }
}

export default getSandwiches
