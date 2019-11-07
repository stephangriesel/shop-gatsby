import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Product from '../components/product';

const PRODUCTS_QUERY = graphql`
    query AllProducts {
            allStripeSku {
              edges {
                node {
                  product {
                    name
                    id
                  }
                  id
                  attributes {
                    name
                  }
                  price
                }
              }
            } 
            allStripeProduct {
              edges {
                node {
                  name
                  id
                }
              }
            }
    }
`;

const Products = () => {
  return (<StaticQuery query={PRODUCTS_QUERY}
    render={
      ({ allStripeSku, allStripeProduct }) => {
        return allStripeProduct.edges.map(product => (
          <Product
            key={product.node.id}
            skus={allStripeSku.edges}
            product={product.node} />
        ))
        return
      }
    }
  />)
}

export default Products;
