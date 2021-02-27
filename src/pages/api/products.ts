import products from "@data/products"
import { NextApiRequest, NextApiResponse } from "next"

const getAllProducts = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products)
}

export default getAllProducts
