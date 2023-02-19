import { useState, useContext } from 'react';
import { Button, Typography, Box, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom'
//components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`
const Container = styled(Link)`
   display: flex;
   text-decoration: none;
   color: inherit;
`
const LoginButton = styled(Button)`
    background: #fff;
    color: #2874f0;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`

const CustomBttons = () => {

    const [open, setOpen] = useState(false)
    const { account, setAccount } = useContext(DataContext)

    const openDialog = () => {
        setOpen(true)
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant='contained' onClick={() => openDialog()} >Login</LoginButton>
            }
            <Typography style={{ width: 135, marginTop: 3 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            <Container to='/cart'>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomBttons