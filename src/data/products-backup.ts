import firebaseAdmin from "@config/firebaseAdmin"
import { NextApiRequest, NextApiResponse } from "next"

const getAllProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = firebaseAdmin.firestore()

    const collections = db.collection("collections")
    const burgerDoc = await collections.doc("Burgers").get()
    const chickenDoc = await collections.doc("Chicken").get()
    const pizzaDoc = await collections.doc("Pizza").get()
    const sandwichDoc = await collections.doc("Sandwiches").get()
    const sushiDoc = await collections.doc("Sushi").get()

    const products = {
      Burgers: burgerDoc.data(),
      Chicken: chickenDoc.data(),
      Pizza: pizzaDoc.data(),
      Sandwiches: sandwichDoc.data(),
      Sushi: sushiDoc.data()
    }

    res.status(200).json(products)
  } catch (err) {
    res.status(404).json({ message: "Products not found!" })
  }
}

export default getAllProducts
