import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import './index.css'
import styled from 'styled-components'

const TitleEl = styled.p`
  text-transform: capitalize;
`

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h2 style={{marginTop: '30px'}}>DoodleBug</h2>
      <p>DoodleBug is a site all about doodles come to life. Most doodles end up where they started, on the side of a todo list, on a magazine article you are reading, etc. DoodleBug is all about putting those doodles on things you can savor beyond the joy of the doodeling itself. Please enjoy our products, and if you like them think about buying a friend one as well.</p>
      <p>Thanks!</p>
      <p>- The Doodle Team</p>
    <h1>Products</h1>
    <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <Link to={`products/${node.handle}`}>
      <GatsbyImage className='main-image' image={getImage(node.featuredImage)} alt={node.title}/>
          <TitleEl>{node.title} - {(+node.priceRangeV2.minVariantPrice.amount).toFixed(2)}</TitleEl>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage


export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          featuredImage {
            id
            gatsbyImageData(width: 200)
          }
          title
          shopifyId
          description
          handle
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
