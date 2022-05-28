import React from 'react';
import { makeStyles } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
    <p>Copyright 2020 <a href="#">My Webs</a>. All Right Reserved</p>
    </footer>
  )
}

export default Footer

const useStyles = makeStyles((theme) => ({
    footer: {
        padding:'8px 40px',
        borderTop:'1px solid rgba(0,0,0,0.01)',
        textAlign:'center',
        '& p': {
            color:'#333'
        },
        '& a': {
            color:'#ff0157',
            fontWeight:'500',
            textDecoration:'none'
        }
    },
    
}))