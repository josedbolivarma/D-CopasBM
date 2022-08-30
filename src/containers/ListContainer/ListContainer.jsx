
import { useState } from 'react';
import { ListItem } from '../../components';
import { useFetch } from '../../hooks';
import styles from './ListContainer.module.scss';

export const ListContainer = () => {

  const { data, isLoading } = useFetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  const [limit, setLimit] = useState( 4 );

  const renderData = ( limit ) => {
    return data.map((item, index) => {
       if(index >= limit) {
           return;
   } else {
       return (
       <ListItem
       key={ item.idDrink }
       idDrink={ item.idDrink }
       strDrink={ item.strDrink }
       strDrinkThumb={ item.strDrinkThumb }
       />
     )
   }
    })
 }

  return (
    <div className={ styles.listContainer }>
        <h2 className='subtitle'>OTHER COCKTAILS</h2>
        {
          ( data && !isLoading ) && renderData( limit )
        }
        <div className={styles.cardContainer__titleBox}>
            <a className='btnMore' onClick={() => setLimit(limit + 4)}>View More</a>
        </div>
    </div>
  )
}