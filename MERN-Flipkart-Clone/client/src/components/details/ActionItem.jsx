import { Box, Button, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { cartProduct } from '../../service/cartApi';


const StyledButton = styled(Button)`
    width: 46%;
    height: 50px;
    margin-left: 10px;
    margin-top: 25px
`

const ActionItem = ({ product }) => {

    const navigate = useNavigate()

    const getCartData = async () => {
        await cartProduct(product)
    }

    const addItemToCart = () => {
        getCartData()
        navigate('/cart')
    }


    return (
        <Box style={{ minWidth: '40%', padding: '40px 40px' }}>
            <Box>
                <img src={product.detailUrl} alt="productImg" />
            </Box>
            <StyledButton variant='contained' onClick={() => addItemToCart()} style={{ background: '#ff9f00' }}><ShoppingCartIcon />Add to cart</StyledButton>
            <StyledButton variant='contained' onClick={()=>alert('Payment System has not been added.')} style={{ background: '#fb541b' }}><FlashOnIcon />Buy Now</StyledButton>
        </Box>
    )
}

export default ActionItem