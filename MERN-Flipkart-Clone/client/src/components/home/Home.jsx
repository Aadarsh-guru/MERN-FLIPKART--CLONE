import { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// components
import Banner from './Banner'
import Navbar from './Navbar'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
import { getProducts } from '../../service/productApi'

const Component = styled(Box)`
    padding: 10px 12px;
    background: #F2F2F2;
`
const Home = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await getProducts()
        setProducts(response)
    }

    useEffect(() => {
        fetchProducts()
    }, [products])

    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <MidSlide products={products} title='Deal of the day' timer={true} />
                <MidSection />
                <Slide products={products} title='Discounts for You' timer={false} />
                <Slide products={products} title='Guggested items' timer={false} />
                <Slide products={products} title='Top Selections' timer={false} />
                <Slide products={products} title='Recommeded items' timer={false} />
                <Slide products={products} title='Trending Offers' timer={false} />
                <Slide products={products} title='Top Deals on Accesories' timer={false} />
            </Component>
        </>
    )
}

export default Home