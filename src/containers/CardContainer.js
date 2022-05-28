import React from 'react';

import { makeStyles } from '@material-ui/core';

const CardContainer = () => {
  const classes = useStyles();
  return (
    <section className={classes.cardContainer} id="menu">
        <div className={classes.cardContainer__content}>
            <h2 className={classes.cardContainer__title}>Our <span>M</span>enu</h2>
            <p className={classes.cardContainer__text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className={classes.cardContainer__grid}>
          
        <div className={classes.cardContainer__box}>
                <div className={classes.cardContainer__imgBx}>
                    <img className={classes.cardContainer__image} src="https://cdn.pixabay.com/photo/2017/09/01/03/21/campari-soda-2702959_1280.jpg" alt="" />
                </div>
                <div className={classes.cardContainer__boxText}>
                    <h3>Mojito Cubano</h3>
                </div>
            </div>

            <div className={classes.cardContainer__box}>
                <div className={classes.cardContainer__imgBx}>
                    <img className={classes.cardContainer__image} src="https://cdn.pixabay.com/photo/2017/09/01/03/21/campari-soda-2702959_1280.jpg" alt="" />
                </div>
                <div className={classes.cardContainer__boxText}>
                    <h3>Mojito Cubano</h3>
                </div>
            </div>

            <div className={classes.cardContainer__box}>
                <div className={classes.cardContainer__imgBx}>
                    <img className={classes.cardContainer__image} src="https://cdn.pixabay.com/photo/2017/09/01/03/21/campari-soda-2702959_1280.jpg" alt="" />
                </div>
                <div className={classes.cardContainer__boxText}>
                    <h3>Mojito Cubano</h3>
                </div>
            </div>

            <div className={classes.cardContainer__box}>
                <div className={classes.cardContainer__imgBx}>
                    <img className={classes.cardContainer__image} src="https://cdn.pixabay.com/photo/2017/09/01/03/21/campari-soda-2702959_1280.jpg" alt="" />
                </div>
                <div className={classes.cardContainer__boxText}>
                    <h3>Mojito Cubano</h3>
                </div>
            </div>

        </div>
        <div className={classes.cardContainer__titleBox}>
            <a href="#" className={classes.cardContainer__btn}>View All</a>
        </div>
    </section>
  )
}

const useStyles = makeStyles((theme) => ({
    cardContainer: {

    },
    cardContainer__content: {
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    cardContainer__grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
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
    }
}))

export default CardContainer