import React from 'react';
import styles from './NavMobile.module.scss';

export const NavMobile = ({showNav, openNav}) => {
  return (
    <>
        <div onClick={() => openNav((prev) => !prev)} className={styles.menuBtn}>
            Меню
        </div>
        <nav className={`${showNav ? styles.showNav : styles.hiddenNav} ${styles.mobileNav}`}>
            <ul className={styles.listItems}>
                <li className={styles.navItem}>Кнопка 1</li>
                <li className={styles.navItem}>Кнопка 2</li>
                <li className={styles.navItem}>Кнопка 3</li>
                <li className={styles.navItem}>Кнопка 4</li>
            </ul>
        </nav>
    </>
  )
}
