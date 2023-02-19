import cartProduct from "../modals/cartProductSchema.js";

export const saveCartProduct = async(request, response)=>{
    try {
        const cartItem = await cartProduct({
            id: request.body.id,
            url: request.body.url,
            detailUrl: request.body.detailUrl,
            title: request.body.title,
            price: request.body.price,
            quantity: request.body.quantity,
            description: request.body.description,
            discount: request.body.discount,
            tagline: request.body.tagline
        })
        const data = await cartItem.save()
        return response.status(200).json(data)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

export const getCartProducts = async(request, response)=>{
    try {
        const products = await cartProduct.find()
        return response.status(200).json(products)
    } catch (error) {
        response.status(500).json({ message: error.message })   
    }
}

export const deleteCartProduct = async(request, response)=>{
    try {
        const product = await cartProduct.findByIdAndDelete(request.params.id)
        return response.status(200).json(product)
    } catch (error) {
        response.status(500).json({ message: error.message })   
    }
}