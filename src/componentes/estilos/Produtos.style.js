import styled from 'styled-components'

export const StyledProduto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow .5s;
  border-radius: 5px;
  margin:25px;

  & p{
    font-size: 18px;
  }
    & img{width: 250px;}
    & img{border-radius: 35px;}
`