import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener('scroll', (e) => {
        if(window.pageYOffset > 0) {
            setNavbarActive(true);
        } else{
            setNavbarActive(false);
        }
    })
  }, [])

  return (
    <header className={navbarActive? styles.header__active : styles.header}>
    <Link
    to='/'
    className={styles.header__logo}>Food<span>.</span></Link>
    <div className={styles.header__menuToggle} ></div>

    <ul className={styles.header__links}>
       <Link to='/' className={styles.header__link}>Home</Link>
       <Link to='/menu' className={styles.header__link}>Menu</Link>
    </ul>
    </header>
  )
}