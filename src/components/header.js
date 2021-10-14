import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderComponent = styled.header`
  padding: 20px;
  background-color: black;
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

const Header = ({ siteTitle }) => (
  <HeaderComponent
  >
    <div
    >
      <TitleElement>
        <LinkElement
          to="/"
        >
          DoodleBug
        </LinkElement>
      </TitleElement>
    </div>
  </HeaderComponent>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
