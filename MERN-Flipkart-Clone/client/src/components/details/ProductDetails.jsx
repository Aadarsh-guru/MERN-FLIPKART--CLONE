import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
vertical-align: baseline;
& > p {
        font-size: 14px;
        margin-top: 10px;
 }
`
const StyledBadge = styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px
`
const ColumText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
& > td{
    font-size: 14px;
    margin-top: 10px;
    border: none;
} 
`

const ProductDetails = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }} >
                8 Ratings & 1 Reviews
                <Box component='span'><img src={fassured} alt="flipcart assured" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28, marginLeft: 10 }} >₹{product.price.cost}</Box>
                <Box component='span' style={{ color: '#878787', marginLeft: 10 }} ><strike>₹{product.price.mrp}</strike></Box>
                <Box component='span' style={{ color: '#388E3C', marginLeft: 10 }}  >{product.price.discount}</Box>
            </Typography>
            <Typography>Avialable Offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Bank Offer10% off on HSBC Bank Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and aboveT&C</Typography>
                <Typography><StyledBadge />Bank Offer10% off on OneCard Credit Card EMI Transactions, up to ₹1500. On orders of ₹5,000 and aboveT&C</Typography>
                <Typography><StyledBadge />Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up to ₹1,500. On orders of ₹5,000 and aboveT&C</Typography>
                <Typography><StyledBadge />Buy this Product and Get Extra ₹500 Off on Two-WheelersT&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumText>
                        <TableCell style={{ color: '#878787' }} >Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }} >Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumText>
                    <ColumText>
                        <TableCell style={{ color: '#878787' }} >Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumText>
                    <ColumText>
                        <TableCell style={{ color: '#878787' }} >Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{ color: '#2874f0' }} >SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumText>
                    <ColumText>
                        <TableCell colSpan={2} >
                            <img src={adURL} style={{ width: 390 }} alt="supercoins" />
                        </TableCell>
                    </ColumText>
                    <ColumText>
                        <TableCell style={{ color: '#878787' }} >Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetails