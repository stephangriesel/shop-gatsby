import React, { useState } from "react"

const Product = ({ skus, product }) => {
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
        <article>
            <img src="https://picsum.photos/200/300" alt="Shirt" />
            <h3>{product.name}</h3>
            <select value={sku} onChange={(e) => setSku(e.target.value)}>
                <option value="sku_G6vszZFkytG9wH">S</option>
                <option value="sku_G6vuNHU9ctlikc">M</option>
                <option value="sku_FwQkOSJP53FQWz">L</option>
            </select>
            <button onClick={placeOrder}>Buy</button>
        </article>
    )
}

export default Product
