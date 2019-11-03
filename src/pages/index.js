import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => {
  const stripe = window.Stripe("pk_test_uxVeps2FOxzKRvcPqBMCOftw00gMGfkch3")

  const [sku, setSku] = useState('sku_G6vszZFkytG9wH');

  const placeOrder = () => {
    stripe.redirectToCheckout({
      items: [
        {
          sku: sku,
          quantity: 1
        }
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel"
    })
  }
  return (
    <Layout>
      <div>
        <article>
          <img src="https://picsum.photos/200/300" alt="Shirt" />
          <h3>Haat Oorheers Shirt</h3>
          <select value={sku} onChange={(e) => setSku(e.target.value)}>
            <option value="sku_G6vszZFkytG9wH">S</option>
            <option value="sku_G6vuNHU9ctlikc">M</option>
            <option value="sku_FwQkOSJP53FQWz">L</option>
          </select>
          <button onClick={placeOrder}>Buy</button>
        </article>
        <article>
          <img src="https://picsum.photos/200/300" alt="Shirt" />
          <h3>Tanktop</h3>
          <select value={sku} onChange={(e) => setSku(e.target.value)}>
            <option value="sku_G6vszZFkytG9wH">S</option>
            <option value="sku_G6vuNHU9ctlikc">M</option>
            <option value="sku_FwQkOSJP53FQWz">L</option>
          </select>
          <button onClick={placeOrder}>Buy</button>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
