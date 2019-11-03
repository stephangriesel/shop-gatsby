import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Product from "../components/product"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Product />
      </div>
    </Layout>
  )
}

export default IndexPage
