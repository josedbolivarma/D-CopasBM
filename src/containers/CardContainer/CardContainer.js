import { useState , useEffect } from 'react';

import { Link } from 'react-router-dom';

import styles from './CardContainer.module.scss';

export const CardContainer = () => {

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(4);

  const getData = async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data.drinks)
  }

  const renderData = (limit) => {
     return data.map((item, index) => {
        if(index >= limit) {
            return;
    } else {
        return (
        <div key={index} className={styles.cardContainer__box}>
            <Link to={`detail/${ item.idDrink }`}>
            <div className={styles.cardContainer__imgBx}>
            <img className={styles.cardContainer__image} src={item.strDrinkThumb} alt={item.strDrink} />
            </div>
            </Link>
            <div className={styles.cardContainer__boxText}>
            <h3>{item.strDrink}</h3>
            </div>
        </div>
      )
    }
     })
  }

  useEffect(() => {
    getData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  }, [])

  return (
    <section className={styles.cardContainer} id="menu">
        <div className={styles.cardContainer__content}>
            <h2 className={styles.cardContainer__title}>Our <span>M</span>enu</h2>
            <p className={styles.cardContainer__text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.cardContainer__grid}>

            {
                data? renderData(limit)
                 : <h2>MY NAME IS</h2>
            }

        </div>
        <div className={styles.cardContainer__titleBox}>
            <a className={styles.cardContainer__btn} onClick={() => setLimit(limit + 4)}>View All</a>
        </div>
    </section>
  )
}