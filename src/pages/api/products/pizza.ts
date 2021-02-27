import firebaseAdmin from "@config/firebaseAdmin"
import { NextApiRequest, NextApiResponse } from "next"

const getPizza = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = firebaseAdmin.firestore()

    const collections = db.collection("collections")
    const pizzaDoc = await collections.doc("Pizza").get()

    const products = {
      pizza: [pizzaDoc.data()]
    }

    res.status(200).json(products)
  } catch (err) {
    res.status(404).json({ message: "Products not found!" })
  }
}

export default getPizza
