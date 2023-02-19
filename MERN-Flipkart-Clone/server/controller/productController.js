import Product from "../modals/productSchema.js"

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find()
    return response.status(200).json(products)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const getProductById = async (request, response) => {
  try {
    const product = await Product.findById(request.params.id)
    return response.status(200).json(product)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

