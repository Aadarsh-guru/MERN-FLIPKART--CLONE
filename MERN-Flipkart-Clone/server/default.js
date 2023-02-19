import { products } from "./constants/data.js"
import Product from "./modals/productSchema.js"

const DefaultData = async()=>{
    try {
        await Product.insertMany(products)
        console.log('Data inserted successfully')
    } catch (error) {
        console.log(`error while inserting default data`,error.message)
    }
}

export default DefaultData;