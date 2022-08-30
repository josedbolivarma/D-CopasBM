import { useState } from 'react';
import { Item } from '../../components';
import { useFetch } from '../../hooks';
import { Loader } from '../../shared';

import styles from './CardContainer.module.scss';

export const CardContainer = () => {

  const { data, isLoading, error } = useFetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');

  const [limit, setLimit] = useState(4);


  const renderData = (limit) => {
     return data.map((item, index) => {
        if(index >= limit) {
            return;
    } else {
        return (
        <Item 
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
    <section className={styles.cardContainer} id="menu">
        {
          ( isLoading ) && <Loader />
        }
        <div className={styles.cardContainer__content}>
            <h2 className={styles.cardContainer__title}>Our <span>M</span>enu</h2>
            <p className={styles.cardContainer__text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.cardContainer__grid}>

            {
                ( !isLoading && data ) && renderData(limit)
            }

        </div>
        <div className={styles.cardContainer__titleBox}>
            <a className={styles.cardContainer__btn} onClick={() => setLimit(limit + 4)}>View All</a>
        </div>
    </section>
  )
}