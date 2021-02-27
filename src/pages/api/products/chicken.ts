import firebaseAdmin from "@config/firebaseAdmin"
import { NextApiRequest, NextApiResponse } from "next"

const getChicken = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = firebaseAdmin.firestore()

    const collections = db.collection("collections")
    const chickenDoc = await collections.doc("Chicken").get()

    const products = {
      chicken: [chickenDoc.data()]
    }

    res.status(200).json(products)
  } catch (err) {
    res.status(404).json({ message: "Products not found!" })
  }
}

export default getChicken
