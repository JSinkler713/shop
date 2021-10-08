/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"
import { StoreProvider } from "./src/context/store-context"

//wrap pages with store-context
export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
