import { Box, Button, styled, Typography } from "@mui/material"
import { addEllipsis } from "../../utils/common-utils"
import GroupedButten from "./GroupedButten"
import {deleteCartProduct } from "../../service/cartApi"


const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff;

`
const LeftComponent = styled(Box)`
    margin: 20px; 
    display: flex;
    flex-direction: column;
`

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`
const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`

const CartItem = ({ Item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const removeItemFromCart = async(id)=>{
        await deleteCartProduct(id)
    }

    return (
        <Component>
            <LeftComponent>
                <img src={Item.url} alt="product" style={{height:110, width:110}} />
                <GroupedButten/>
            </LeftComponent>
            <Box style={{margin:20}} >
                <Typography>{addEllipsis(Item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component='span'><img src={fassured} alt="seller" style={{ width: 50, marginLeft: 10 }} /></Box>
                </SmallText>
                <Typography style={{ margin: '20px 0'}}>
                    <Box component='span' style={{ fontWeight: 600, fontSize: 18 }} >₹{Item.price.cost}</Box>
                    <Box component='span' style={{ color: '#878787', marginLeft: 10 }} ><strike>₹{Item.price.mrp}</strike></Box>
                    <Box component='span' style={{ color: '#388E3C', marginLeft: 10 }}  >{Item.price.discount}</Box>
                </Typography>
                <Remove onClick={()=> removeItemFromCart(Item._id)} >Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem