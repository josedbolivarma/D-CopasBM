import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import styles from './SearchContainer.module.scss';
import { Item } from '../../components';

export const SearchContainer = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  const busqueda = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

  const getData = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data.drinks)
    }catch(err) {
        setData([])
        console.log(`Error: ${err}`);
    }
    }

  useEffect(() => {
    getData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  }, [])

  const handleChange = (e) => {
    setQuery(e.target.value)
    if (e.target.value === '') {
        setData([]);
    } else {
        getData(busqueda)
    }
}

  return (
    <section className={styles.cardContainer} id="menu">
        <div className={styles.cardContainer__content}>
            <h2 className={styles.cardContainer__title}>Search <span>C</span>octel</h2>
            <p className={styles.cardContainer__text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className={styles.searchContainer__searchBox}>
            <input 
            type='search'
            className={searchActive? styles.searchContainer__searchBoxActive : styles.searchContainer__search}
            placeholder='Dry Martini...'
            onChange={handleChange}
            />
            <SearchIcon 
            className={styles.searchContainer__searchIcon}
            onClick={() => setSearchActive(!searchActive)}
            />
            </div>
        </div>
        <div className={styles.cardContainer__grid}>

            {
                data? 
                data.map((item, index) => (
                    <Item 
                        key={ item.idDrink }
                        idDrink={ item.idDrink }
                        strDrink={ item.strDrink }
                        strDrinkThumb={ item.strDrinkThumb }
                    />
                ))
                 : 
                 <div
                 className={styles.cardContainer__gridColumn}
                 >
                     <Typography style={{
                     margin: '1rem 0',
                 }} variant='h4' component='h2' align='center'><b>COCTAIL NOT FOUND</b></Typography>
                 </div>
            }

        </div>
        <div className={styles.cardContainer__titleBox}>
            <a className={(!data || data.length === 0)? styles.cardContainer__btn : styles.none} onClick={() => getData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')}>View All</a>
        </div>
    </section>
  )
}