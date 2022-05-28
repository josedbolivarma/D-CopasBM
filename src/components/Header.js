import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
    <a href="#" className={classes.header__logo}>Food<span>.</span></a>
    <div className={classes.header__menuToggle} ></div>

    <ul className={classes.header__links}>
       <Link to='/' className={classes.header__link}>Home</Link>
       <Link to='/' className={classes.header__link}>About</Link>
       <Link to='/menu' className={classes.header__link}>Menu</Link>
       <Link to='/' className={classes.header__link}>Expert</Link>
       <Link to='/' className={classes.header__link}>Testimonials</Link>
       <Link to='/' className={classes.header__link}>Contact</Link>
    </ul>
    </header>
  )
}

export default Header

const useStyles = makeStyles((theme) => ({
    header: {
        position:'fixed',
        top:'0',
        left:'0',
        width:'100%',
        padding:'40px 100px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        zIndex:'10000',
        transition:'0.5s'
    },
    header__logo: {
        fontSize:'2.5em',
        color:'#fff',
        textDecoration:'none',
        fontWeight:'700px',
        '& span': {
            color:'#ff0157'
        }
    },
    header__links: {
        position: 'relative',
        display: 'flex',
        gap: theme.spacing(2)
    },
    header__link: {
        fontSize: '1rem',
        color:'#fff',
        textDecoration:'none',
        fontWeight:'300px',
        '&:hover': {
            cursor: 'pointer',
            color: '#ff0157'
        }
    }
}))