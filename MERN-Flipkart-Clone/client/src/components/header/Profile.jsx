import { Box, Typography, Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
margin-top: 5px;
`
const Logout = styled(Typography)({
    fontSize: 14,
    marginLeft: 20
})

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false)

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const logoutUser = () => {
        setAccount('')
    }

    return (
        <>
            <Box onClick={handleClick} >
                <Typography style={{ marginTop: 4, cursor: "pointer", fontWeight: 600, textTransform: 'uppercase' }}>{account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => { handleClose(); logoutUser() }}>
                    <PowerSettingsNewIcon color='primary' fontSize='small' />
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile