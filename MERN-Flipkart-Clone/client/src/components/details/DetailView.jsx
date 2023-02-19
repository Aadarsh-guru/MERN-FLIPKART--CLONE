import { Box, Grid, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../service/productApi';
import ActionItem from './ActionItem';
import ProductDetails from './ProductDetails';


const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`
const Container = styled(Grid)`
    background: #FFFFFF;
    display: flex;
`

const DetailView = () => {

    const { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        showProduct()
    }, [])

    const showProduct = async () => {
        const res = await getProduct(id)
        setProduct([res.data])
    }

    return (
        <Component>
            {
                product.map(product => (
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12} >
                            <ActionItem product={product} />
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={12} >
                            <ProductDetails product={product} />
                        </Grid>
                    </Container>
                ))
            }
        </Component>
    )
}

export default DetailView