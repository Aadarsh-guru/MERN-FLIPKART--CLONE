import { Box, Button, Grid, styled, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import CartItem from "./CartItem"
import TotalView from "./TotalView"
import {getCartProducts} from "../../service/cartApi"
import EmtyCart from "./EmtyCart"

const Container = styled(Grid)`
    padding: 30px 135px;
`
const Header = styled(Box)`
    padding: 15px 25px;
    background: #fff;
`
const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb( 0 0 0 / 10% );
    border-top: 1px solid #f0f0f0;
`
const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
    border-radius: 2px;
`
const LeftComponent = styled(Grid)`
    padding-right: 15px;
`

const Cart = () => {

  const [cartData, setCartData] = useState([])

  useEffect(()=>{
    const setItemsToCartData = async()=>{
      const res = await getCartProducts()
      setCartData(res.data)
    }
    setItemsToCartData()
  },[cartData])

  return (
    <>
      {cartData.length ?
          <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12} >
              <Header>
                <Typography>My Cart({cartData.length})</Typography>
              </Header>
              {
                cartData.map(Item => (
                  <CartItem Item={Item} /> 
                ))
              }
              <ButtonWrapper>
                <StyledButton onClick={()=>alert('Payment System has not been added.')} >Place Order</StyledButton>
              </ButtonWrapper>
            </LeftComponent>
            <Grid item lg={3} md={3} sm={12} xs={12} >
              <TotalView cartData={cartData} />
            </Grid>
          </Container>
        : <EmtyCart/>
      }
    </>
  )
}

export default Cart