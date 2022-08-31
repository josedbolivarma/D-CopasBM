
import { Link } from 'react-router-dom';
import styles from './ListItem.module.scss';

export const ListItem = ({ idDrink, strDrink, strDrinkThumb }) => {

  return (
    <div className={ styles.listFlex }>
            <div className={ styles.listBox }>
              <div className={ styles.imgBx }>
                <Link to={`/detail/${ idDrink }`}>
                <img 
                src={ strDrinkThumb }
                alt={ strDrink }
                />
                </Link>
                </div>
                <div className={ styles.itemContent }>
                    <h2 className={ styles.itemTitle }>{ strDrink }</h2>
                    <p className={ styles.itemSubtitle }>Alcoholic { Number( idDrink ).toFixed( 2 ) }°</p>
                    <span className='markPrice'>${ parseInt( idDrink ) }</span>
                </div>
            </div>
        </div>
  )
}
