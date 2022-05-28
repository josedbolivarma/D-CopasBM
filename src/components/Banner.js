import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  const classes = useStyles();

  return (
    <section className={classes.banner} id="banner">
        <div className={classes.banner__content}>
            <h2 className={classes.banner__title}>Always Choose Good</h2>
            <p className={classes.banner__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Link to='/menu' className={classes.banner__link}>Our Menu</Link>
        </div>
    </section>
  )
}

const useStyles = makeStyles((theme) => ({
    banner: {
        position:'relative',
        width:'100%',
        height:'100vh',
        backgroundImage:'url("https://cdn.pixabay.com/photo/2021/07/03/13/52/pineapple-6383951_1280.jpg")',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundSize:'cover'
    },
    banner__content: {
        maxWidth:'980px',
        textAlign:'center',
    },
    banner__title: {
        fontSize:'5em',
        color:'#fff'
    },
    banner__text: {
        color: '#333',
        fontSize: '1.2rem'
    },
    banner__link: {
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
        '&:hover': {
            letterSpacing: '5px'

        }
    }
}))

export default Banner