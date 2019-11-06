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
    }
`;

const Products = () => {
    return (<StaticQuery query={PRODUCTS_QUERY}
        render={
            () => {
                return (
                    <Product />
                )
            }
        }
    />)
}

export default Products;
