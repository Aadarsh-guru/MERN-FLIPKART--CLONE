import { InputBase, Box, styled, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { getProducts } from '../../service/productApi';
import { Link } from 'react-router-dom'

const SerchContainer = styled(Box)`
    background: #fff;
    width : 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex
`
const InputSeachBase = styled(InputBase)`
    padding-left:20px;
    width: 100%;
    font-size: unset;
`

const SearchWrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`
const ListWrapper = styled(List)`
     position: absolute;
     background: #FFFFFF;
     color: #000;
     margin-top: 36px;
`

const Search = () => {

  const [product, setProduct] = useState([])
  const [text, setText] = useState('')



  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts()
      setProduct(res)
    }
    fetchProducts()
  }, [])

  const getText = (text) => {
    setText(text)
  }

  return (
    <SerchContainer>
      <InputSeachBase
        placeholder='Serch for Products, Brands and More'
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchWrapper>
        <SearchIcon />
      </SearchWrapper>
      {
        text &&
        <ListWrapper>
          {
            product.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link to={`/product/${product._id}`} onClick={() => setText('')} style={{ textDecoration: 'none', color: 'inherit' }} >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SerchContainer>
  )
}

export default Search