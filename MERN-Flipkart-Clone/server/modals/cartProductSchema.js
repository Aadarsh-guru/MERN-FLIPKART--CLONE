import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
})

const cartProduct = mongoose.model('cartProduct',cartProductSchema)

export default cartProduct; 