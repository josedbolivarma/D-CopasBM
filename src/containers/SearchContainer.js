import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchContainer = () => {
  const classes = useStyles();
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
    <section className={classes.cardContainer} id="menu">
        <div className={classes.cardContainer__content}>
            <h2 className={classes.cardContainer__title}>Search <span>C</span>octel</h2>
            <p className={classes.cardContainer__text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className={classes.searchContainer__searchBox}>
            <input 
            type='search'
            className={searchActive? classes.searchContainer__searchBoxActive : classes.searchContainer__search}
            placeholder='Dry Martini...'
            onChange={handleChange}
            />
            <SearchIcon 
            className={classes.searchContainer__searchIcon}
            onClick={() => setSearchActive(!searchActive)}
            />
            </div>
        </div>
        <div className={classes.cardContainer__grid}>

            {
                data? 
                data.map((item, index) => (
                    <div key={index} className={classes.cardContainer__box}>
        <div className={classes.cardContainer__imgBx}>
            <img className={classes.cardContainer__image} src={item.strDrinkThumb} alt={item.strDrink} />
        </div>
        <div className={classes.cardContainer__boxText}>
            <h3>{item.strDrink}</h3>
        </div>
    </div>
                ))
                 : 
                 <div
                 className={classes.cardContainer__gridColumn}
                 >
                     <Typography style={{
                     margin: '1rem 0',
                 }} variant='h4' component='h2' align='center'><b>COCTAIL NOT FOUND</b></Typography>
                 </div>
            }

        </div>
        <div className={classes.cardContainer__titleBox}>
            <a className={(!data || data.length === 0)? classes.cardContainer__btn : classes.none} onClick={() => getData('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')}>View All</a>
        </div>
    </section>
  )
}

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        margin: '4rem 0'
    },
    cardContainer__content: {
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        gap: theme.spacing(2)
    },
    cardContainer__grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 380px)',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '380px',

        }
    },
    cardContainer__box: {
        width:'340px',
        margin:'20px',
        boxShadow:'0px 5px 35px rgba(0,0,0,0.08)'
    },
    cardContainer__title: {
        fontSize:'2rem',
        color:'#000',
        textDecoration:'none',
        fontWeight:'400',
        '& span': {
            fontSize: '2.4rem',
            color:'#ff0157',
            fontWeight:'700',
        }
    },
    cardContainer__text: {
    },
    cardContainer__boxText: {
        padding:'10px 0px 5px 10px',
        '& h3': {
            fontWeight:'440',
            color:'#111'
        }
    },
    cardContainer__imgBx: {
        position:'relative',
        width:'100%',
        height:'300px'
    },
    cardContainer__image: {
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        objectFit:'cover'
    },
    cardContainer__btn: {
        fontSize:'1em',
        color:'#fff',
        background:'#ff0157',
        display:'inline-block',
        padding:'10px 30px',
        marginTop:'20px',
        textTransform:'uppercase',
        textDecoration:'none',
        letterSpacing:'2px',
        transition:'all 300ms',
        cursor: 'pointer',
        '&:hover': {
            letterSpacing: '5px'

        }
    },
    cardContainer__titleBox: {
        textAlign: 'center'
    },
    none: {
        display: 'none'
    },
    cardContainer__gridColumn: {
        gridColumn: '2 / 3',
        [theme.breakpoints.down('sm')]: {
            gridColumn: '1 / 3',
        }
    },
    searchContainer__searchBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '40px',
        padding: '.2rem',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
        }

    },
    searchContainer__search: {
        width: '100%',
        opacity: '1',
        padding: '.6rem',
        border: 'none',
        outline: 'none',
        borderRadius: '16px 4px 16px 4px',
        backgroundColor: '#333',
        color: '#FFF',
        transition: '1s all ease',
        '&::placeholder': {
            color: '#FFF'
        }
    },
    searchContainer__searchBoxActive: {
        padding: '.4rem',
        border: 'none',
        outline: 'none',
        borderRadius: '50px',
        width: '0%',
        opacity: '0',
        transition: '1s all ease',
    },
    searchContainer__searchIcon: {
        width: '40px',
        height: '40px',
        cursor: 'pointer'
    }
}))

export default SearchContainer