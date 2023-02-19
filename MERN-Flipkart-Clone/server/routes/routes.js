import express from "express";
import { userSignUp, userLogin } from "../controller/userController.js";
import { getProducts, getProductById } from "../controller/productController.js";
import { saveCartProduct, getCartProducts, deleteCartProduct } from "../controller/cartController.js";
const route = express.Router()

// user routes
route.post('/signup', userSignUp)
route.post('/login', userLogin)

//  product routes
route.get('/products',getProducts)
route.get('/product/:id', getProductById)

// cart routes
route.post('/saveCartProduct',saveCartProduct)
route.get('/getCartProducts',getCartProducts)
route.delete('/deleteCartProduct/:id',deleteCartProduct)

export default route