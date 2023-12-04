import styles from './Product.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = ({addToCart, sizes, colors, currentColor, setCurrentSize, setCurrentColor}) => {

  return (
    <form onSubmit={addToCart}>
      <OptionSize sizes={sizes} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor}/>
    <OptionColor colors={colors} setCurrentColor={setCurrentColor} currentColor={currentColor}/>
    <Button className={styles.button}>
      <span className="fa fa-shopping-cart" />
    </Button>
  </form>
  )
}

export default ProductForm;