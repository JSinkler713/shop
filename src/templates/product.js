import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { AddToCart } from "../components/addToCart"
// import { StoreContext } from "../context/store-context"
import './product.css'


import Layout from "../components/layout"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  const [variantId, setVariantId] = React.useState(product.variants[0].shopifyId)
  const [variantIndex, setVariantIndex] = React.useState(0)

  //const mainImageRef = React.useRef()

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

  // if there are alternateImages
  const alternateImages = product.images ? (product.images.map((img, i)=> {
    return (
      <div className='little-wrapper'>
      <GatsbyImage id={`variant-${i}`}  onClick={()=>console.log('hey')} key={`variant-${i}`} image={getImage(img)} alt={product.title + `${i}`}/>
      </div>
    )
  })) : null



  return (
    <Layout>
      <h1>{product.title} - ${(+product.priceRangeV2.maxVariantPrice.amount).toFixed(2)}</h1>
      <div className='images-container'>
        <div className='main-image-side-gallery'>
          <GatsbyImage  className='main-image' image={getImage(product.featuredImage)} alt={product.title}/>
          <div className='side-gallery'>
            {alternateImages}
          </div>
        </div>
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

