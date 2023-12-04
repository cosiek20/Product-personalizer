// import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {

  return (
    <section>
        {productsData.map(products => <Product key={products.id} {...products} />)}
    </section>
  );
};

export default Products;