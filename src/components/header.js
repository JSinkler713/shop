import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderComponent = styled.header`
  padding: 20px;
  background-color: black;
`
const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const LinkElement = styled(Link)`
  color: white;
  :visited {
    color: white;
  }
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`
const TitleElement = styled.h1`
  margin: 0;
`
const CartElement = styled(Link)`
  color: white;

`

const Header = ({ siteTitle }) => (
  <HeaderComponent
  >
    <HeaderWrapper>
      <TitleElement>
        <LinkElement
          to="/"
        >
          DoodleBug
        </LinkElement>
      </TitleElement>
      <LinkElement
        to='/cart'
      >
        <CartElement>
          Cart
        </CartElement>
      </LinkElement>
    </HeaderWrapper>
  </HeaderComponent>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
