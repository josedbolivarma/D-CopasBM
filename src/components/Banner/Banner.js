import { Link } from 'react-router-dom';

import styles from './Banner.module.scss';

export const Banner = () => {

  return (
    <section className={styles.banner} id="banner">
        <div className={styles.banner__content}>
            <h2 className={styles.banner__title}>Always Choose Good</h2>
            <p className={styles.banner__text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <Link to='/menu' className={styles.banner__link}>Our Menu</Link>
        </div>
    </section>
  )
}