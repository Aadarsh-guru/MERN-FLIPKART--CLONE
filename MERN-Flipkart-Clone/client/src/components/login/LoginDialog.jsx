import { useContext, useState } from 'react'
import { Box, Button, Dialog, styled, TextField, Typography } from '@mui/material'
import { authenticateLogin, authenticateSignup } from '../../service/api'
import { DataContext } from '../../context/DataProvider'

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
`
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 84.85%;
    width: 28%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #fff;
        font-weight: 600
    }
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 20px;

    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #F86418;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`
const RequestOtp = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
`
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787
`

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`
const Error = styled(Typography)({
    fontSize:10,
    color:"#ff6161",
    lineHeight:0,
    marginTop:10,
    fontWeight: 600
})

const accountInitialValue = {
    login: {
        view: 'login',
        heading: 'login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you are new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const initialSignUpValue = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: ""
}

const initialLoginValue ={
    username: '',
    password: ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [accout, toggleAccount] = useState(accountInitialValue.login)
    const [signUp, setSignUp] = useState(initialSignUpValue)
    const [login, setLogin] = useState(initialLoginValue)
    const [error, setError] = useState(false)
    const { setAccount } = useContext(DataContext)


    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValue.login)
        setError(false)
    }

    const toggleSignUp = () => {
        toggleAccount(accountInitialValue.signup)
    }

    const onInputChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value })
    }


    const signUpUser = async () => {
        let response = await authenticateSignup(signUp)
        if (!response) return;
        handleClose()
        setAccount(signUp.firstname)
    }

    const onValueChange = (e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const loginUser = async()=>{
      let response = await authenticateLogin(login)
      if (response.status === 200) {
        handleClose()
        setAccount(response.data.data.firstname) 
      }else{
        setError(true)
      }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }} >
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{accout.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{accout.subHeading}</Typography>
                    </Image>
                    {accout.view === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='username' label='Enter Username' />
                            { error && <Error>Plese enter valid username and password</Error>}
                            <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='password' label='Enter Password' />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOtp>Request OTP</RequestOtp>
                            <CreateAccount onClick={() => toggleSignUp()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label='Enter First Name' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label='Enter Last Name' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                            <LoginButton onClick={() => signUpUser()}>Contineu</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog