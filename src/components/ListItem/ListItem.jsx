
import styles from './ListItem.module.scss';

export const ListItem = ({ idDrink, strDrink, strDrinkThumb }) => {

  return (
    <div className={ styles.listFlex }>
            <div className={ styles.listBox }>
              <div className={ styles.imgBx }>
                <img 
                src={ strDrinkThumb }
                alt={ strDrink }
                />
                </div>
                <div className={ styles.itemContent }>
                    <h2 className={ styles.itemTitle }>{ strDrink }</h2>
                    <p className={ styles.itemSubtitle }>Tera nodsad dd</p>
                    <span className='markPrice'>$20.00</span>
                </div>
            </div>
        </div>
  )
}
