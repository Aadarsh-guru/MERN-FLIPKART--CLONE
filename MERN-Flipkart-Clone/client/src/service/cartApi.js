import axios from 'axios'

const URL = `http://localhost`


export const cartProduct = async (data) => {
    try {
        return await axios.post(`${URL}/saveCartProduct`,data)
    } catch (error) {
        console.log(`Error while calling get product api`, error.message);
    }
}

export const getCartProducts = async () => {
    try {
        return await axios.get(`${URL}/getCartProducts`)
    } catch (error) {
        console.log(`Error while calling get product api`, error.message);
    }
}

export const deleteCartProduct = async (id) => {
    try {
        return await axios.delete(`${URL}/deleteCartProduct/${id}`)
    } catch (error) {
        console.log(`Error while calling get product api`, error.message);
    }
}