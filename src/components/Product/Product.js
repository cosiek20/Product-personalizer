import styles from './Product.module.scss';
import { PropTypes, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({title, name, basePrice, colors, sizes}) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name)

  const getPrice = () => {
    const findSize = sizes.find((e) => e.name === currentSize)
    return basePrice + findSize.additionalPrice;
  }
  

  const addToCart = e => {
    e.preventDefault();
    console.log('Summary')
    console.log('===========')
    console.log('Name:', title)
    console.log('Price:', getPrice())
    console.log('Size:', currentSize)
    console.log('Color:', currentColor)
  }

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm 
          addToCart={addToCart}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          sizes={sizes}
          colors={colors}
        />
      </div>
    </article>
  )
};

// Product.propTypes = {
//   props: {
//   name: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   basePrice: PropTypes.number.isRequired,
//   sizes: PropTypes.object.isRequired,
//   colors: PropTypes.string.isRequired,
//   }
// };

export default Product;