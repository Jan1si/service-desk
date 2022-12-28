import React from 'react';
import styles from './NavMobile.module.scss';

export const NavMobile = ({isShowNav, setIsShowNav, openPopup}) => {
  return (
    <>
        <div onClick={() => openPopup(isShowNav, setIsShowNav())} className={styles.menuBtn}>
            Меню
        </div>
        <nav className={styles.mobileNav}>
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
