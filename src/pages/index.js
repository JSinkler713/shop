import * as React from "react"
import { Link, graphql } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import './index.css'

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
        <h1>Products</h1>
    <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <Link to={`products/${node.handle}`}>
      <GatsbyImage className='main-image' image={getImage(node.featuredImage)} alt={node.title}/>
          <p>{node.title} - {node.priceRangeV2.minVariantPrice.amount} </p>
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
