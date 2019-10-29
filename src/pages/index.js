import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const stripe = window.Stripe("pk_test_uxVeps2FOxzKRvcPqBMCOftw00gMGfkch3")


  const placeOrder = sku => {
    stripe.redirectToCheckout({
      items: [
        {
          sku: sku,
          quantity: 1
        }
      ],
      successUrl: "http://localhost:8000/",
      cancelUrl: "http://localhost:8000/"
    })
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome To Gatsby Shop</h1>
      <div>
        <article>
          <img src="https://picsum.photos/200/300" alt="Shirt" />
          <h3>Haat Oorheers Shirt</h3>
          <button onClick={() => placeOrder("sku_FwQkOSJP53FQWz")}>Buy</button>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
