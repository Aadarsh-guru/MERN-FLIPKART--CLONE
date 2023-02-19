import axios from "axios";

const URL = `http://localhost`

export const getProducts = async()=>{
    try {
        const response = await axios.get(`${URL}/products`)
        return response.data
    } catch (error) {
        console.log(`Error while calling get products api`, error.message);
    }
}

export const getProduct = async(id)=>{
    try {
        return await axios.get(`${URL}/product/${id}`)
    } catch (error) {
        console.log(`Error while calling get product api`, error.message);
    }
}