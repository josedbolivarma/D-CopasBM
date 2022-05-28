import React from 'react';
import { makeStyles } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <div className={classes.footer__container}>
            <div className={classes.footer__content}>
                <div className={classes.footer__box}>
                    <img className={classes.footer__icon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png" alt="Valve Logo" />
                    <img className={classes.footer__icon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png" alt="Dota Logo" />
                </div>
                <p className={classes.footer__description}>Dota y el logotipo de Dota son marcas comerciales y/o marcas comerciales registradas de Valve Corporation. 2021 Valve Corporation, todos los derechos reservados.</p>  
            </div>
        </div>
    </footer>
  )
}

export default Footer

const useStyles = makeStyles((theme) => ({
    footer: {
        width:'100%',
        backgroundColor: '#000',
        padding:'2rem 0',
        color: '#FFF',
        zIndex: '1000000'
    },
    footer__container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
       
    },
    footer__content: {
        width: '40%',
        textAlign: 'center'
    },
    footer__box: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer__icon: {
        width: '180px',
        height: '60px'
    },
    footer__description: {
        margin: '2rem auto',
        color: '#C8C8C8'
    }
}))