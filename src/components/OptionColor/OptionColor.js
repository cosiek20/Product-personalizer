import shortid from "shortid";
import styles from './OptionColor.module.scss';
import clsx from "clsx";

const OptionColor = ({colors, setCurrentColor, currentColor}) => {

  const prepareColorClass = (color) => {

    const prepareColorName = color[0].toUpperCase() + color.slice(1)

    const colorClass =  styles['color' + prepareColorName];
    
    return colorClass;
  }

  return(
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
      {colors.map(color => <li key={shortid()}><button onClick={() => setCurrentColor(color)} type="button" className={clsx(prepareColorClass(color), currentColor === color && styles.active)} /></li>)}
    </ul>
    </div>
  )
}

export default OptionColor;