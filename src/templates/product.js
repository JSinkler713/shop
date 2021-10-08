import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AddToCart } from "../components/addToCart"
import { StoreContext } from "../context/store-context"


import Layout from "../components/layout"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  const { client } = React.useContext(StoreContext)
  console.log('***********************')
  // currently just displaying first variant
  console.log(product.variants[0])
  console.log('***********************')
  console.log('image', product.featuredImage)
  return (
    <Layout>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <div>
      {<GatsbyImage image={getImage(product.featuredImage)} alt={product.title}/>}
      <AddToCart
        variantId={product.variants[0].shopifyId}
        quantity={1}
        available={true}
      />
      </div>
    </Layout>
  )
}

export default ProductTemplate

