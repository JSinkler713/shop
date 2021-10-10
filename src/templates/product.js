import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AddToCart } from "../components/addToCart"
import { StoreContext } from "../context/store-context"
import './product.css'


import Layout from "../components/layout"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  const [variantId, setVariantId] = React.useState(product.variants[0].shopifyId)
  const [variantIndex, setVariantIndex] = React.useState(0)

  const mainImageRef = React.useRef()

  function setVariant(id, i) {
    setVariantIndex(i)
    setVariantId(id)
  }

  const images = product.variants.map((variant, i)=> {
    return (
      <div className={(i === variantIndex) ? 'active img-wrapper' : 'img-wrapper'}>
      <GatsbyImage id={`variant-${i}`}  onClick={()=>setVariant(variant.shopifyId, i)} key={`variant-${i}`} image={getImage(variant.image)} alt={product.title}/>
      </div>
    )
  })
  return (
    <Layout>
      <h1>{product.title} - ${(+product.priceRangeV2.maxVariantPrice.amount).toFixed(2)}</h1>
      <div className='images-container'>
      <GatsbyImage ref={mainImageRef} className='main-image' image={getImage(product.featuredImage)} alt={product.title}/>
      <div>{product.description}</div>
        <div className='variant-container'>
        {images}
        </div>
      <AddToCart
        variantId={variantId}
        quantity={1}
        available={true}
      />
      </div>
    </Layout>
  )
}

export default ProductTemplate

