import firebaseAdmin from "@config/firebaseAdmin"
import { NextApiRequest, NextApiResponse } from "next"

const getSushi = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = firebaseAdmin.firestore()

    const collections = db.collection("collections")
    const sushiDoc = await collections.doc("Sushi").get()

    const products = {
      sushi: [sushiDoc.data()]
    }

    res.status(200).json(products)
  } catch (err) {
    res.status(404).json({ message: "Products not found!" })
  }
}

export default getSushi
