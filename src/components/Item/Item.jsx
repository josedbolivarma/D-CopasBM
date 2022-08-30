
import { Link } from 'react-router-dom';
import styles from './Item.module.scss';

export const Item = ({ idDrink, strDrinkThumb, strDrink }) => {
  return (
    <div 
    className={styles.cardContainer__box}>
            <Link to={`/detail/${ idDrink }`}>
            <div className={styles.cardContainer__imgBx}>
            <img className={styles.cardContainer__image} 
            src={ strDrinkThumb } 
            alt={ strDrink } />
            </div>
            </Link>
            <div className={styles.cardContainer__boxText}>
            <h3>{ strDrink }</h3>
            </div>
    </div>
  )
}
